import React, { useState } from 'react';

export default function Filters({ onFilterChange }: { onFilterChange: (filters: any) => void }) {
  const [status, setStatus] = useState<string>('');

  const handleFilterChange = (newStatus: string) => {
    setStatus(newStatus);
    onFilterChange({ status: newStatus }); // Passed the selected filter back to the parent
  };

  return (
    <div className="flex items-center space-x-4">
      <select
        className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
        value={status}
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        <option value="">Filter by Status</option>
        <option value="pending">Pending</option>
        <option value="accepted">Accepted</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
}
