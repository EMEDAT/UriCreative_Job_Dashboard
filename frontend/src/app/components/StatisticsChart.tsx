'use client';

import React, { useEffect, useState } from 'react';
import { fetchStats } from '@/api/fetchStats';
import { Bar } from 'react-chartjs-2';

export default function StatisticsChart() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    fetchStats().then(setStats).catch(console.error);
  }, []);

  if (!stats) return <p>Loading chart...</p>;

  const data = {
    labels: Object.keys(stats.statusCounts),
    datasets: [
      {
        label: 'Applications by Status',
        data: Object.values(stats.statusCounts),
        backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
        hoverBackgroundColor: ['#66bb6a', '#ffa726', '#e57373'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.label}: ${context.raw}`,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
