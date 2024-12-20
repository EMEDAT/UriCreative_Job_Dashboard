import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: ['http://localhost:3000', 'https://uri-creative-job-dashboard-ysns.vercel.app'], // Allow localhost and production frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies if needed
  });

  app.setGlobalPrefix('api'); // API prefix
  await app.listen(3001);
  console.log('Backend running on http://localhost:3001/api');
}
bootstrap();