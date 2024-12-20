'use client';

import React, { useState } from 'react';
import Filters from '@/components/Filters';
import ApplicationTable from '@/components/ApplicationTable';
import StatisticsChart from '@/components/StatisticsChart';

export default function Page() {
  const [filters, setFilters] = useState<{ status?: string; startDate?: string; endDate?: string }>({});

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4 space-y-8">
      <h2 className="text-3xl font-bold text-center text-blue-600">Job Application Dashboard</h2>
      <Filters onFilterChangeAction={setFilters} />
      <StatisticsChart filters={filters} />
      <ApplicationTable filters={filters} />
    </div>
  );
}