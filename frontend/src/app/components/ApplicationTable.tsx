'use client';

import React, { useEffect, useState } from 'react';
import { fetchApplications } from '@/api/fetchApplications';

interface Filters {
  status?: string;
  startDate?: string;
  endDate?: string;
}

// Helper function to format date to mm/dd/yyyy
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero
  const day = String(date.getDate()).padStart(2, '0'); // Add leading zero
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

export default function ApplicationTable({ filters }: { filters: Filters }) {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const loadApplications = () => {
    setLoading(true);
    fetchApplications(filters)
      .then(setApplications)
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadApplications();
  }, [filters]);

  if (loading)
    return <p className="text-center text-gray-500 mt-6">Loading applications...</p>;

  if (applications.length === 0)
    return (
      <p className="text-center text-gray-500 mt-6">
        No applications found. Try changing the filter.
      </p>
    );

  return (
    <div className="rounded-lg border border-gray-300 bg-white shadow-md p-8 max-w-6xl mx-auto">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">Applications List</h3>
    <div className="overflow-hidden rounded-lg shadow-lg border">
      <table className="min-w-full border-collapse text-md">
        <thead className="bg-blue-600 text-white text-center">
          <tr>
            <th className="px-6 py-4 border-b">Job Title</th>
            <th className="px-6 py-4 border-b">Company Name</th>
            <th className="px-6 py-4 border-b">Status</th>
            <th className="px-6 py-4 border-b">Date Applied</th>
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
              <td className="px-6 py-4 text-center border-b">{app.jobTitle}</td>
              <td className="px-6 py-4 text-center border-b">{app.companyName}</td>
              <td className="px-6 py-4 text-center border-b">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
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
              <td className="px-6 py-4 text-center border-b">{formatDate(app.dateApplied)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>  
  );
}