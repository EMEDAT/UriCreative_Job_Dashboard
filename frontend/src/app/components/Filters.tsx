'use client';

import React, { useState, useEffect } from 'react';
import '../styles/Filters.css';

interface FiltersProps {
  onFilterChangeAction: (filters: { status?: string; startDate?: string; endDate?: string }) => void;
}

export default function Filters({ onFilterChangeAction }: FiltersProps) {
  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Trigger the filter change whenever any filter value updates
  useEffect(() => {
    onFilterChangeAction({ status, startDate, endDate });
  }, [status, startDate, endDate, onFilterChangeAction]);

  return (
    <div className="filters-container">
      <div className="filter-item">
        <label className="filter-label">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="filter-select"
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <div className="filter-item">
        <label className="filter-label">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="filter-input"
        />
      </div>

      <div className="filter-item">
        <label className="filter-label">End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="filter-input"
        />
      </div>
    </div>
  );
}