const WORDPRESS_GRAPHQL_URL =
    process.env.WORDPRESS_GRAPHQL_URL ||
    "https://drsanjay-wp.studiosentientdemo.com/graphql";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ errors: [{ message: "Use a POST request." }] });
    }

    const { query, variables } = req.body || {};

    if (typeof query !== "string" || !query.trim()) {
        return res.status(400).json({ errors: [{ message: "A GraphQL query is required." }] });
    }

    try {
        const wordpressResponse = await fetch(WORDPRESS_GRAPHQL_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query, variables: variables || {} }),
        });
        const result = await wordpressResponse.json();

        return res.status(wordpressResponse.status).json(result);
    } catch (error) {
        return res.status(502).json({
            errors: [{ message: `Could not reach WordPress: ${error.message}` }],
        });
    }
}

