'use client';

import React, { useEffect, useState } from 'react';
import { fetchStats } from '@/api/fetchStats';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface Filters {
  startDate?: string;
  endDate?: string;
}

export default function StatisticsChart({ filters }: { filters?: Filters }) {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    fetchStats(filters)
      .then(setStats)
      .catch(console.error);
  }, [filters]);

  if (!stats) return <p className="text-center text-gray-500">Loading chart...</p>;

  const data = {
    labels: Object.keys(stats.statusCounts),
    datasets: [
      {
        label: 'Applications by Status',
        data: Object.values(stats.statusCounts),
        backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
      },
    ],
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <Bar data={data} />
    </div>
  );
}