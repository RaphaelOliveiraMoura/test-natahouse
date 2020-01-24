import request from 'supertest';

import app from '~/app';

describe('Starship', () => {
  it('should be able list starships with the number of stops for a specified distance', async () => {
    const response = await request(app)
      .get('/starships/stops')
      .query({
        distance: 1000000,
      });

    expect(response.status).toEqual(200);
    expect(Number.isNaN(response.body.stops)).toEqual(false);
  });
});
