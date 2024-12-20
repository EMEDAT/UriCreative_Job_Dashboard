'use client';

import ApplicationTable from '@/components/ApplicationTable';
import StatisticsChart from '@/components/StatisticsChart';
import Filters from '@/components/Filters';

export default function Page() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <Filters />
      <StatisticsChart />
      <ApplicationTable />
    </div>
  );
}
