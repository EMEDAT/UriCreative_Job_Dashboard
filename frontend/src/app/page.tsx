'use client';

import ApplicationTable from '@/components/ApplicationTable';
import StatisticsChart from '@/components/StatisticsChart';
import Filters from '@/components/Filters';

export default function Page() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-blue-600">Dashboard</h2>
      <div className="flex flex-col gap-6">
        <Filters />
        <StatisticsChart />
        <ApplicationTable />
      </div>
    </div>
  );
}
