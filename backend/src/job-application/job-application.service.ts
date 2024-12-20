import { Injectable } from '@nestjs/common';
import { JobApplication } from './job-application.model';

@Injectable()
export class JobApplicationService {
  private readonly jobApplications: JobApplication[] = [
    { id: '1', jobTitle: 'Frontend Developer', companyName: 'TechCorp', status: 'accepted', dateApplied: '2024-10-12' },
    { id: '2', jobTitle: 'Backend Developer', companyName: 'DevSolutions', status: 'pending', dateApplied: '2024-10-15' },
    { id: '3', jobTitle: 'Fullstack Engineer', companyName: 'InnovateX', status: 'rejected', dateApplied: '2024-09-22' },
  ];

  getApplications(filters?: { status?: string; startDate?: string; endDate?: string }): JobApplication[] {
    let filteredApplications = this.jobApplications;

    // Filter by status
    if (filters?.status) {
      filteredApplications = filteredApplications.filter((app) => app.status === filters.status);
    }

    // Filter by startDate
    if (filters?.startDate) {
      const startDate = new Date(filters.startDate);
      filteredApplications = filteredApplications.filter((app) => new Date(app.dateApplied) >= startDate);
    }

    // Filter by endDate
    if (filters?.endDate) {
      const endDate = new Date(filters.endDate);
      filteredApplications = filteredApplications.filter((app) => new Date(app.dateApplied) <= endDate);
    }

    return filteredApplications;
  }

  getStats() {
    const total = this.jobApplications.length;

    const statusCounts = this.jobApplications.reduce((acc, app) => {
      acc[app.status] = (acc[app.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const monthlyCounts = this.jobApplications.reduce((acc, app) => {
      const month = app.dateApplied.slice(0, 7); // Get YYYY-MM
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return { total, statusCounts, monthlyCounts };
  }
}