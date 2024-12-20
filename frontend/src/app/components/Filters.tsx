'use client';

import React, { useState } from 'react';

interface FiltersProps {
  onFilterChangeAction: (filters: { status?: string; startDate?: string; endDate?: string }) => void;
}

export default function Filters({ onFilterChangeAction }: FiltersProps) {
  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFilterChange = () => {
    onFilterChangeAction({ status, startDate, endDate });
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
      <div>
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Start Date</label>
        <input
          type="date"
          className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
          value={startDate}
          onChange={(e) => {
            setStartDate(e.target.value);
            handleFilterChange();
          }}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">End Date</label>
        <input
          type="date"
          className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
          value={endDate}
          onChange={(e) => {
            setEndDate(e.target.value);
            handleFilterChange();
          }}
        />
      </div>
    </div>
  );
}