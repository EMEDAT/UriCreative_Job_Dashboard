import { Injectable } from '@nestjs/common';
import { JobApplication } from './job-application.model';

@Injectable()
export class JobApplicationService {
  private readonly jobApplications: JobApplication[] = [
    { id: '1', jobTitle: 'Frontend Developer', companyName: 'TechCorp', status: 'accepted', dateApplied: '2024-10-12' },
    { id: '2', jobTitle: 'Backend Developer', companyName: 'DevSolutions', status: 'pending', dateApplied: '2024-10-15' },
    { id: '3', jobTitle: 'Fullstack Engineer', companyName: 'InnovateX', status: 'rejected', dateApplied: '2024-09-22' },
  ];

  getApplications(filters: { status?: string; startDate?: string; endDate?: string }): JobApplication[] {
    let filteredApplications = [...this.jobApplications];

    // Filter by status
    if (filters.status) {
      filteredApplications = filteredApplications.filter(
        (app) => app.status === filters.status,
      );
    }

    // Filter by date range
    if (filters.startDate || filters.endDate) {
      const startDate = filters.startDate ? new Date(filters.startDate) : null;
      const endDate = filters.endDate ? new Date(filters.endDate) : null;
      
      filteredApplications = filteredApplications.filter((app) => {
        const applicationDate = new Date(app.dateApplied);
        if (startDate && endDate) {
          return applicationDate >= startDate && applicationDate <= endDate;
        } else if (startDate) {
          return applicationDate >= startDate;
        } else if (endDate) {
          return applicationDate <= endDate;
        }
        return true;
      });      
    }

    return filteredApplications;
  }
}