export type SubscribeSource = "waitlist" | "lead_magnet";

const LOOPS_BASE = "https://app.loops.so/api/v1";

type LoopsResult =
  | { ok: true }
  | { ok: false; status: number; message: string };

export async function upsertContact(args: {
  apiKey: string;
  email: string;
  source: SubscribeSource;
  waitlistMailingListId?: string;
  leadMagnetMailingListId?: string;
}): Promise<LoopsResult> {
  const { apiKey, email, source } = args;
  const normalizedEmail = email.trim().toLowerCase();

  const mailingLists: Record<string, boolean> = {};
  if (source === "waitlist" && args.waitlistMailingListId) {
    mailingLists[args.waitlistMailingListId] = true;
  }
  if (source === "lead_magnet" && args.leadMagnetMailingListId) {
    mailingLists[args.leadMagnetMailingListId] = true;
  }

  const body: Record<string, unknown> = {
    email: normalizedEmail,
    source,
    userGroup: source === "waitlist" ? "Waitlist" : "Lead Magnet",
    subscribed: true,
  };
  if (Object.keys(mailingLists).length > 0) {
    body.mailingLists = mailingLists;
  }

  const res = await fetch(`${LOOPS_BASE}/contacts/update`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    return { ok: false, status: res.status, message: txt || res.statusText };
  }

  return { ok: true };
}
