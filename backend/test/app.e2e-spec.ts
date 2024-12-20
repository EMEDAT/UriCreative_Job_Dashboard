import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('JobApplicationController (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/applications (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/applications')
      .expect(200)
      .expect((res) => {
        expect(res.body).toBeInstanceOf(Array);
      });
  });

  it('/applications/stats (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/applications/stats')
      .expect(200)
      .expect((res) => {
        expect(res.body.total).toBeGreaterThanOrEqual(0);
        expect(res.body.statusCounts).toBeInstanceOf(Object);
      });
  });

  it('/applications (GET) with filters', async () => {
    const response = await request(app.getHttpServer())
      .get('/api/applications')
      .query({ status: 'pending', startDate: '2024-10-01', endDate: '2024-10-31' })
      .expect(200);
  
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body).toHaveLength(1); // Based on the sample data
    expect(response.body[0].status).toBe('pending');
  });
  

  afterAll(async () => {
    await app.close();
  });
});
