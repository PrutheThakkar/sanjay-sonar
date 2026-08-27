type ContactRequest = {
  firstName?: unknown;
  lastName?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
};

const requiredFields = ["firstName", "lastName", "phone", "email", "message"] as const;

export async function POST(request: Request) {
  const webhookUrl = process.env.N8N_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    console.error("N8N_WEBHOOK_URL is not configured");
    return Response.json(
      { error: "The consultation form is not configured yet." },
      { status: 503 },
    );
  }

  try {
    const parsedWebhookUrl = new URL(webhookUrl);

    if (!['http:', 'https:'].includes(parsedWebhookUrl.protocol)) {
      throw new Error("Unsupported webhook protocol");
    }
  } catch {
    console.error("N8N_WEBHOOK_URL is invalid");
    return Response.json(
      { error: "The consultation form is not configured correctly." },
      { status: 503 },
    );
  }

  let body: ContactRequest;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const formData = Object.fromEntries(
    requiredFields.map((field) => [
      field,
      typeof body[field] === "string" ? body[field].trim() : "",
    ]),
  );

  if (requiredFields.some((field) => !formData[field])) {
    return Response.json(
      { error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  try {
    const submission = {
      ...formData,
      source: "consultation-page",
      submittedAt: new Date().toISOString(),
    };

    let webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
      cache: "no-store",
    });

    // The existing n8n workflow was originally registered as a GET webhook.
    // Keep the form working with that workflow while allowing it to be changed
    // to the preferred POST method without another website deployment.
    if (webhookResponse.status === 404) {
      const getWebhookUrl = new URL(webhookUrl);

      Object.entries(submission).forEach(([key, value]) => {
        getWebhookUrl.searchParams.set(key, value);
      });

      webhookResponse = await fetch(getWebhookUrl, {
        method: "GET",
        cache: "no-store",
      });
    }

    if (!webhookResponse.ok) {
      console.error(`n8n webhook returned status ${webhookResponse.status}`);
      return Response.json(
        { error: "Unable to submit your request right now. Please try again." },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Unable to reach the n8n webhook:", error);
    return Response.json(
      { error: "Unable to submit your request right now. Please try again." },
      { status: 502 },
    );
  }
}
