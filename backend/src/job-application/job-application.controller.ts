import { Controller, Get, Query } from '@nestjs/common';
import { JobApplicationService } from './job-application.service';

@Controller('applications')
export class JobApplicationController {
  constructor(private readonly jobApplicationService: JobApplicationService) {}

  @Get()
  getApplications(
    @Query('status') status: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.jobApplicationService.getApplications({ status, startDate, endDate });
  }
}