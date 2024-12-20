'use client';

import React, { useEffect, useState } from 'react';
import { fetchApplications } from '@/api/fetchApplications';

export default function ApplicationTable() {
  const [applications, setApplications] = useState<any[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const loadApplications = () => {
    setLoading(true);
    fetchApplications({ status: statusFilter })
      .then(setApplications)
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadApplications();
  }, [statusFilter]);

  if (loading) return <p>Loading applications...</p>;

  if (applications.length === 0) return <p>No applications found.</p>;

  return (
    <>
      <div className="mb-4">
        <select
          className="p-2 border rounded"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Job Title</th>
            <th className="border p-2">Company Name</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Date Applied</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id} className="odd:bg-white even:bg-gray-50">
              <td className="border p-2">{app.jobTitle}</td>
              <td className="border p-2">{app.companyName}</td>
              <td className="border p-2">{app.status}</td>
              <td className="border p-2">{app.dateApplied}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
