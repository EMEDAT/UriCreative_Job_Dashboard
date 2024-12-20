'use client';

import React, { useEffect, useState } from 'react';
import { fetchApplications } from '@/api/fetchApplications';
import '../styles/ApplicationTable.css';

interface Filters {
  status?: string;
  startDate?: string;
  endDate?: string;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
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

  if (loading) return <p className="text-center">Loading applications...</p>;

  if (applications.length === 0)
    return (
      <p className="text-center">No applications found. Try changing the filter.</p>
    );

  return (
    <div className="application-table-container">
      <h3 className="table-title">Applications List</h3>
      <table className="application-table">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company Name</th>
            <th>Status</th>
            <th>Date Applied</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.jobTitle}</td>
              <td>{app.companyName}</td>
              <td>
                <span className={`status-badge ${app.status}`}>
                  {app.status}
                </span>
              </td>
              <td>{formatDate(app.dateApplied)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}