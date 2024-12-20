import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // API prefix
  await app.listen(3001);
  console.log('Backend running on http://localhost:3000/api');
}
bootstrap();
