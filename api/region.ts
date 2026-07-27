export const config = { runtime: "edge" }

export default function handler(request: Request) {
  const country = request.headers.get("x-vercel-ip-country") || "ZA"
  const region = country === "ZA" ? "za" : "intl"
  return new Response(JSON.stringify({ region }), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  })
}
