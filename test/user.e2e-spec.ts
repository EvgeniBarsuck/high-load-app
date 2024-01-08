import request from 'supertest';

import { app } from '../index';
import { Application } from 'express';
import { sequelizePostgres } from '../src/database/database.connection';

describe('Test change user balance request', () => {
  let application: Application;

  beforeAll(async () => {
    application = await app;
  });

  afterAll(async () => {
    await sequelizePostgres.drop({});
  });

  describe('Try single request ', () => {
    it('Success request', async () => {
      await request(application)
        .put('/users/change-balance/5565408d-94ff-4a8e-8673-0b1ba337b391')
        .send({
          transactionAmount: '2',
          transactionType: 'SELL',
        });

      await request(application)
        .get('/users/get-user-balance/5565408d-94ff-4a8e-8673-0b1ba337b391')
        .expect({
          currentBalance: '9998',
        });
    });

    it('Failed request', async () => {
      await request(application)
        .put('/users/change-balance/5565408d-94ff-4a8e-8673-0b1ba337b391')
        .send({
          transactionAmount: '100000',
          transactionType: 'SELL',
        })
        .expect(400);
    });
  });
});
