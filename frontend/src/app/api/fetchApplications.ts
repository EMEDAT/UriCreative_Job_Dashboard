const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function fetchApplications(filters: { status?: string; startDate?: string; endDate?: string } = {}) {
  const queryParams = new URLSearchParams(filters as Record<string, string>).toString();
  const res = await fetch(`${BASE_URL}/api/applications?${queryParams}`);
  if (!res.ok) throw new Error('Failed to fetch applications');
  return res.json();
}
