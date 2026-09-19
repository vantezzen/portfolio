const DAY = 86_400;

const FALLBACK = { downloads: 230_000, stars: 3_500 };

async function fetchJson<T>(
  url: string,
  init?: RequestInit,
): Promise<T | null> {
  try {
    const response = await fetch(url, { ...init, next: { revalidate: DAY } });
    return response.ok ? ((await response.json()) as T) : null;
  } catch {
    return null;
  }
}

/** Monthly npm downloads and GitHub stars, refreshed daily with static fallbacks. */
export async function getAutoformStats() {
  const [npm, github] = await Promise.all([
    fetchJson<{ downloads: number }>(
      "https://api.npmjs.org/downloads/point/last-month/@autoform/react",
    ),
    fetchJson<{ stargazers_count: number }>(
      "https://api.github.com/repos/vantezzen/autoform",
      { headers: { Accept: "application/vnd.github+json" } },
    ),
  ]);

  return {
    downloads: npm?.downloads ?? FALLBACK.downloads,
    stars: github?.stargazers_count ?? FALLBACK.stars,
  };
}
