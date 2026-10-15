import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let enquiry: Record<string, unknown>;
  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error("Invalid request");
    enquiry = body as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  const clean = (value: unknown, max: number) =>
    typeof value === "string" ? value.trim().slice(0, max) : "";
  const name = clean(enquiry.name, 120);
  const email = clean(enquiry.email, 254);
  const organization = clean(enquiry.organization, 160);
  const phone = clean(enquiry.phone, 60);
  const interest = clean(enquiry.interest, 160);
  const message = clean(enquiry.message, 5000);

  if (!name || !emailPattern.test(email) || !message || (enquiry.source !== "contact" && enquiry.source !== "consultation")) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || "services@trumindsclinical.com";
  if (!apiKey || !from) {
    return NextResponse.json({ error: "Online submission is temporarily unavailable. Please email services@trumindsclinical.com." }, { status: 503 });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: enquiry.source === "consultation" ? "New clinical research enquiry" : "Website enquiry",
        text: [
          `Source: ${enquiry.source}`,
          `Name: ${name}`,
          `Email: ${email}`,
          `Organization: ${organization || "Not provided"}`,
          `Phone: ${phone || "Not provided"}`,
          `Interest: ${interest || "Not provided"}`,
          "",
          message,
        ].join("\n"),
      }),
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`Email provider returned ${response.status}`);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form delivery failed", error);
    return NextResponse.json({ error: "We could not send your request. Please email services@trumindsclinical.com." }, { status: 502 });
  }
}
