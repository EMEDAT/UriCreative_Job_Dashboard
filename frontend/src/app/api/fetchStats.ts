export async function fetchStats(filters?: { startDate?: string; endDate?: string }) {
  const queryParams = new URLSearchParams(filters as Record<string, string>).toString();
  const res = await fetch(`https://uricreative-job-dashboard-backend.onrender.com/api/applications/stats?${queryParams}`);
  if (!res.ok) throw new Error('Failed to fetch stats');
  return res.json();
}
