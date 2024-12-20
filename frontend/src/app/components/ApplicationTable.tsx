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

  if (loading)
    return (
      <p className="text-center text-gray-500 mt-6">
        Loading applications...
      </p>
    );

  if (applications.length === 0)
    return (
      <p className="text-center text-gray-500 mt-6">
        No applications found. Try changing the filter.
      </p>
    );

  return (
    <div className="rounded-lg border border-gray-300 bg-white shadow-md p-6">
      {/* Filter Dropdown */}
      <div className="mb-6">
        <label htmlFor="statusFilter" className="block mb-2 font-medium">
          Filter by Status
        </label>
        <select
          id="statusFilter"
          className="p-2 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* Applications Table */}
      <div className="overflow-hidden rounded-lg shadow-lg border w-full max-w-4xl mx-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-600 text-white text-left">
            <tr>
              <th className="p-4 border-b text-lg">Job Title</th>
              <th className="p-4 border-b text-lg">Company Name</th>
              <th className="p-4 border-b text-lg">Status</th>
              <th className="p-4 border-b text-lg">Date Applied</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, idx) => (
              <tr
                key={app.id}
                className={`${
                  idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                } hover:bg-gray-200 transition-colors`}
              >
                <td className="px-6 py-4 border-b">{app.jobTitle}</td>
                <td className="px-6 py-4 border-b">{app.companyName}</td>
                <td className="px-6 py-4 border-b">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      app.status === 'accepted'
                        ? 'bg-green-100 text-green-600'
                        : app.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="px-6 py-4 border-b">{app.dateApplied}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}