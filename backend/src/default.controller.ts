import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class DefaultController {
  @Get()
  @Redirect('/api/applications', 302) // Redirects to /api/applications
  redirectToApplications() {}
}