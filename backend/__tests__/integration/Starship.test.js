import request from 'supertest';

import app from '~/app';

describe('Starship', () => {
  it('should be able list starships', async () => {
    const response = await request(app).get('/starships');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toEqual(true);
  });
});
