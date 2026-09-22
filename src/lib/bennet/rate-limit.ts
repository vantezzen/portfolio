/**
 * Sliding-window rate limit per visitor, kept in memory.
 *
 * On Vercel each function instance has its own map, so this is a soft limit
 * that stops casual abuse and runaway loops rather than a hard quota. Good
 * enough for a portfolio; a KV store would make it exact.
 */
const WINDOW_MS = 10 * 60_000;
const MAX_REQUESTS = 20;
const MAX_TRACKED_KEYS = 5_000;

const hits = new Map<string, number[]>();

export function rateLimit(key: string): {
  ok: boolean;
  retryAfterSeconds: number;
} {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent);
    return {
      ok: false,
      retryAfterSeconds: Math.ceil((recent[0] + WINDOW_MS - now) / 1000),
    };
  }

  recent.push(now);
  hits.set(key, recent);

  if (hits.size > MAX_TRACKED_KEYS) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }

  return { ok: true, retryAfterSeconds: 0 };
}

export function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return (
    forwarded?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "anonymous"
  );
}
