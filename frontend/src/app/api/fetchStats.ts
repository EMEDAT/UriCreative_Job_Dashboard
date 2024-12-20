export async function fetchStats(filters: { status?: string; startDate?: string; endDate?: string } = {}) {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL; // Backend URL from environment variables
  const queryParams = new URLSearchParams(filters as Record<string, string>).toString(); // Build query string
  const res = await fetch(`${BASE_URL}/api/applications/stats?${queryParams}`);
  if (!res.ok) throw new Error(`Failed to fetch stats: ${res.statusText}`);
  return res.json();
}