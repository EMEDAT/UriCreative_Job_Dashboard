export async function fetchApplications(filters: { status?: string; startDate?: string; endDate?: string }) {
  const queryParams = new URLSearchParams(filters as Record<string, string>).toString();
  const res = await fetch(`https://uricreative-job-dashboard-backend.onrender.com/api/applications?${queryParams}`);
  if (!res.ok) throw new Error('Failed to fetch applications');
  return res.json();
}