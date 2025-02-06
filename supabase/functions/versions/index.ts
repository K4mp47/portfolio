// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
Deno.serve(async () => {
  try {
    const fetchData = async (url: string) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
      }
      return response.json();
    };

    // Effettua le richieste alle API in parallelo
    const [
      pythonData,
      flask,
      java,
      reactData,
      angular,
      html,
      css,
      tailwindData,
      nextjsData
    ] = await Promise.all([
      fetchData("https://pypi.org/pypi/pip/json"),
      fetchData("https://pypi.org/pypi/flask/json"),
      fetchData("https://registry.npmjs.org/java/latest"),
      fetchData("https://registry.npmjs.org/react/latest"),
      fetchData("https://registry.npmjs.org/@angular/core/latest"),
      fetchData("https://registry.npmjs.org/html/latest"),
      fetchData("https://registry.npmjs.org/css/latest"),
      fetchData("https://registry.npmjs.org/tailwindcss/latest"),
      fetchData("https://registry.npmjs.org/next/latest")
    ]);

    const cpp = { version: "13.2.0", source: "https://gcc.gnu.org/releases.html" };

    // Compila i dati da restituire
    const data = {
      python: pythonData.info.version,
      flask: flask.info.version,
      java: java.version,
      angular: angular.version,
      react: reactData.version,
      html: html.version,
      css: css.version,
      tailwind: tailwindData.version,
      nextjs: nextjsData.version,
      cpp: cpp.version,
    };

    // Restituisci i dati in formato JSON
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const err = error as Error;
    console.error("Error fetching data:", err.message);
    return new Response(
      JSON.stringify({ error: "Failed to fetch data", details: err.message }),
      { headers: { "Content-Type": "application/json" }, status: 500 }
    );
  }
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/versions' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
