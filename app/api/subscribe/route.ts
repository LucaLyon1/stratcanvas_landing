import { NextResponse } from "next/server";
import { upsertContact, type SubscribeSource } from "@/lib/loops";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const apiKey = process.env.LOOPS_API_KEY;
  const waitlistMailingListId = process.env.LOOPS_WAITLIST_LIST_ID;
  const leadMagnetMailingListId = process.env.LOOPS_LEAD_MAGNET_LIST_ID;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Loops is not configured on the server." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const email = (body as { email?: unknown }).email;
  const source = (body as { source?: unknown }).source;

  if (typeof email !== "string" || !emailRegex.test(email.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (source !== "waitlist" && source !== "lead_magnet") {
    return NextResponse.json(
      { error: "Invalid subscription source." },
      { status: 400 }
    );
  }

  const result = await upsertContact({
    apiKey,
    email: email.trim(),
    source: source as SubscribeSource,
    waitlistMailingListId,
    leadMagnetMailingListId,
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: "Could not subscribe right now. Please try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
