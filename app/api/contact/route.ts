type ContactRequest = {
  firstName?: unknown;
  lastName?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
};

const requiredFields = ["firstName", "lastName", "phone", "email", "message"] as const;

const productionWebhookUrl =
  "https://pruthe.app.n8n.cloud/webhook/a294fd41-d8f6-497f-bf5b-9de5d4401834";

export async function POST(request: Request) {
  const webhookUrl = process.env.N8N_WEBHOOK_URL?.trim() || productionWebhookUrl;

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
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        source: "consultation-page",
        submittedAt: new Date().toISOString(),
      }),
      cache: "no-store",
    });

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
