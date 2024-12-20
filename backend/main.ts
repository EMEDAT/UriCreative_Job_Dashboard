import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: ['http://localhost:3000', 'https://uri-creative-job-dashboard-8sod.vercel.app'], // Allow local and deployed frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies if needed
  });

  app.setGlobalPrefix('api'); // Set API prefix

  // Use environment variable for port or default to 3001
  const port = process.env.PORT || 3001;

  await app.listen(port);

  // Dynamically determine the base URL
  const serverUrl = process.env.RENDER_EXTERNAL_URL || `http://localhost:${port}`;
  console.log(`Backend running on ${serverUrl}/api`);
}
bootstrap();
