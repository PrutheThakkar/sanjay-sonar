import { useState } from "react";
import Head from "next/head";
import { ALL_PAGES_QUERY } from "../lib/graphql-queries";

export default function GraphQLExplorer() {
    const [query, setQuery] = useState(ALL_PAGES_QUERY);
    const [result, setResult] = useState("Click Run query to fetch WordPress data.");
    const [isLoading, setIsLoading] = useState(false);

    async function runQuery() {
        setIsLoading(true);
        setResult("Loading…");

        try {
            const response = await fetch("/api/graphql", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query }),
            });
            const data = await response.json();
            setResult(JSON.stringify(data, null, 2));
        } catch (error) {
            setResult(JSON.stringify({ error: error.message }, null, 2));
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <Head>
                <title>WordPress GraphQL Explorer</title>
            </Head>

            <main className="explorer">
                <header>
                    <div>
                        <h1>WordPress GraphQL Explorer</h1>
                        <p>Runs queries against the configured WPGraphQL endpoint.</p>
                    </div>
                    <button type="button" onClick={runQuery} disabled={isLoading}>
                        {isLoading ? "Running…" : "Run query"}
                    </button>
                </header>

                <section className="panels">
                    <label>
                        <span>Query</span>
                        <textarea
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            spellCheck="false"
                        />
                    </label>

                    <div className="result-panel">
                        <span>Result</span>
                        <pre>{result}</pre>
                    </div>
                </section>
            </main>

            <style jsx>{`
                :global(*) { box-sizing: border-box; }
                :global(body) { margin: 0; background: #111827; color: #e5e7eb; }
                .explorer { min-height: 100vh; padding: 24px; font-family: ui-monospace, monospace; }
                header { display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-bottom: 20px; }
                h1 { margin: 0 0 6px; font: 700 24px/1.2 system-ui, sans-serif; }
                p { margin: 0; color: #9ca3af; font: 14px/1.5 system-ui, sans-serif; }
                button { border: 0; border-radius: 7px; padding: 11px 18px; background: #16a34a; color: white; cursor: pointer; font-weight: 700; }
                button:disabled { cursor: wait; opacity: .65; }
                .panels { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; height: calc(100vh - 112px); }
                label, .result-panel { display: flex; min-width: 0; flex-direction: column; gap: 8px; }
                label > span, .result-panel > span { color: #9ca3af; font-size: 13px; text-transform: uppercase; }
                textarea, pre { width: 100%; min-height: 0; flex: 1; margin: 0; border: 1px solid #374151; border-radius: 8px; padding: 16px; background: #030712; color: #d1fae5; font: 14px/1.6 ui-monospace, monospace; overflow: auto; }
                textarea { resize: none; outline: none; }
                textarea:focus { border-color: #22c55e; }
                pre { white-space: pre-wrap; overflow-wrap: anywhere; }
                @media (max-width: 800px) { .panels { grid-template-columns: 1fr; height: auto; } textarea, pre { min-height: 420px; } header { align-items: flex-start; } }
            `}</style>
        </>
    );
}
