const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const endpoint = process.env.WAITLIST_ENDPOINT;
  if (!endpoint) {
    return Response.json({ error: "Waitlist is not set up yet." }, { status: 503 });
  }

  let email = "";
  try {
    const body = await request.json();
    email = typeof body?.email === "string" ? body.email.trim() : "";
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const upstream = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ email, source: "landing-page" }),
  }).catch(() => null);

  if (!upstream || !upstream.ok) {
    return Response.json({ error: "Could not save your email. Please try again." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
