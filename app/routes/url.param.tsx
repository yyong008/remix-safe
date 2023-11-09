import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request }: any) => {
  const url = new URL(request.url);
  return json({
    query: url.searchParams.get("p") as string
  })
}

export default function UrlParams() {
  const { query } = useLoaderData<typeof loader>()

  return (
    <div>
      <div>query {query}</div>
      {/* refresh script exec */}
      <div dangerouslySetInnerHTML={{__html: query }}></div>
      
    </div>
  );
}
