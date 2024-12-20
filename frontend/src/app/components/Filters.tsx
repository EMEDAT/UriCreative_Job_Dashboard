'use client';

import React, { useState } from 'react';
import '../styles/Filters.css';

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
    <div className="filters-container">
      <div className="filter-item">
        <label>Status</label>
        <select
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

      <div className="filter-item">
        <label>Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => {
            setStartDate(e.target.value);
            handleFilterChange();
          }}
        />
      </div>

      <div className="filter-item">
        <label>End Date</label>
        <input
          type="date"
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