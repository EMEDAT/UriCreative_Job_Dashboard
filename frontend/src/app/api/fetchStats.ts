const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function fetchStats() {
  const res = await fetch(`${BASE_URL}/api/applications/stats`);
  if (!res.ok) throw new Error('Failed to fetch stats');
  return res.json();
}
