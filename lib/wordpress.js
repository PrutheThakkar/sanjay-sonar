const WORDPRESS_GRAPHQL_URL =
    process.env.WORDPRESS_GRAPHQL_URL ||
    "https://drsanjay-wp.studiosentientdemo.com/graphql";

// These defaults use WordPress Pages beneath a parent page with slug "expertise".
// If WPGraphQL exposes a custom post type, set these to its GraphQL names instead.
const EXPERTISE_COLLECTION =
    process.env.WORDPRESS_EXPERTISE_GRAPHQL_COLLECTION || "pages";
const EXPERTISE_SINGLE = process.env.WORDPRESS_EXPERTISE_GRAPHQL_SINGLE || "page";
const EXPERTISE_PARENT_SLUG = process.env.WORDPRESS_EXPERTISE_PARENT_SLUG || "expertise";

function assertGraphQLName(value, environmentVariable) {
    if (!/^[_A-Za-z][_0-9A-Za-z]*$/.test(value)) {
        throw new Error(`${environmentVariable} is not a valid GraphQL field name`);
    }
}

function stripHtml(value = "") {
    return (value || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function normalizeExpertise(node) {
    return {
        id: node.id,
        slug: node.slug,
        title: node.title || "",
        description: stripHtml(node.content).slice(0, 220),
        content: node.content || "",
        icon: node.featuredImage?.node?.sourceUrl || "/images/laparoscopic.svg",
    };
}

async function graphqlRequest(query, variables = {}) {
    const response = await fetch(WORDPRESS_GRAPHQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
        throw new Error(`WPGraphQL request failed with status ${response.status}`);
    }

    const result = await response.json();

    if (result.errors?.length) {
        throw new Error(result.errors.map((error) => error.message).join("; "));
    }

    return result.data;
}

export async function getExpertiseItems() {
    assertGraphQLName(
        EXPERTISE_COLLECTION,
        "WORDPRESS_EXPERTISE_GRAPHQL_COLLECTION",
    );

    const data = await graphqlRequest(`
        query GetExpertiseItems {
            ${EXPERTISE_COLLECTION}(first: 100) {
                nodes {
                    id
                    slug
                    title
                    content
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                    ${EXPERTISE_COLLECTION === "pages" ? "parent { node { slug } }" : ""}
                }
            }
        }
    `);

    let nodes = data[EXPERTISE_COLLECTION]?.nodes || [];

    if (EXPERTISE_COLLECTION === "pages") {
        nodes = nodes.filter((node) => node.parent?.node?.slug === EXPERTISE_PARENT_SLUG);
    }

    return nodes.map(normalizeExpertise);
}

export async function getExpertiseBySlug(slug) {
    assertGraphQLName(EXPERTISE_SINGLE, "WORDPRESS_EXPERTISE_GRAPHQL_SINGLE");

    const idType = EXPERTISE_SINGLE === "page" ? "URI" : "SLUG";
    const data = await graphqlRequest(
        `
            query GetExpertiseBySlug($slug: ID!) {
                ${EXPERTISE_SINGLE}(id: $slug, idType: ${idType}) {
                    id
                    slug
                    title
                    content
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                }
            }
        `,
        { slug },
    );

    const node = data[EXPERTISE_SINGLE];
    return node ? normalizeExpertise(node) : null;
}
