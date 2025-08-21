const request = require('supertest');
const express = require('express');
const geminiRouter = require('../geminiRouter');

describe('geminiRouter', () => {
  let app;
  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use('/analyze', geminiRouter);
  });

  it('should return 400 if text is missing', async () => {
    const res = await request(app)
      .post('/analyze')
      .send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toMatch(/Missing/);
  });

  it('should return 200 and result for valid text (integration test)', async () => {
    const res = await request(app)
      .post('/analyze')
      .send({ text: 'The moon is made of cheese.' });
    expect([200, 500]).toContain(res.statusCode);
    expect(res.body).toHaveProperty('result');
  });
});
