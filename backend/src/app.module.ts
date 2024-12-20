import { Module } from '@nestjs/common';
import { JobApplicationModule } from './job-application/job-application.module';
import { DefaultController } from './default.controller';

@Module({
  imports: [JobApplicationModule],
  controllers: [DefaultController],
})
export class AppModule {}
