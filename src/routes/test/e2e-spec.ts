import { INestApplication } from '@nestjs/common';
import { init } from '@testing';
import * as request from 'supertest';
import { TestModule } from './module';

describe('TEST E2E', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await init([TestModule]);
  });

  it('/ (GET)', async () => {
    return request(app.getHttpServer()).get('/').expect('12345 connection!');
  });
});
