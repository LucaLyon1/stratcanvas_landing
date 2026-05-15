import crypto from "crypto";

export type SubscribeSource = "waitlist" | "lead_magnet";

export function subscriberHash(email: string): string {
  return crypto
    .createHash("md5")
    .update(email.trim().toLowerCase())
    .digest("hex");
}

async function mcFetch(
  serverPrefix: string,
  apiKey: string,
  path: string,
  init?: RequestInit
): Promise<Response> {
  const basic = Buffer.from(`anystring:${apiKey}`).toString("base64");
  const url = `https://${serverPrefix}.api.mailchimp.com/3.0${path}`;
  return fetch(url, {
    ...init,
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });
}

export async function upsertSubscriber(args: {
  apiKey: string;
  serverPrefix: string;
  audienceId: string;
  email: string;
  source: SubscribeSource;
}): Promise<{ ok: true } | { ok: false; status: number; message: string }> {
  const { apiKey, serverPrefix, audienceId, email } = args;
  const hash = subscriberHash(email);
  const memberPath = `/lists/${encodeURIComponent(audienceId)}/members/${hash}`;

  const putBody = {
    email_address: email.trim().toLowerCase(),
    status_if_new: "subscribed" as const,
  };

  const putRes = await mcFetch(serverPrefix, apiKey, memberPath, {
    method: "PUT",
    body: JSON.stringify(putBody),
  });

  if (!putRes.ok) {
    const txt = await putRes.text();
    return {
      ok: false,
      status: putRes.status,
      message: txt || putRes.statusText,
    };
  }

  const tagName = args.source === "waitlist" ? "Waitlist" : "Lead Magnet";
  const tagsRes = await mcFetch(
    serverPrefix,
    apiKey,
    `${memberPath}/tags`,
    {
      method: "POST",
      body: JSON.stringify({
        tags: [{ name: tagName, status: "active" }],
      }),
    }
  );

  if (!tagsRes.ok) {
    const txt = await tagsRes.text();
    return {
      ok: false,
      status: tagsRes.status,
      message: txt || tagsRes.statusText,
    };
  }

  return { ok: true };
}
