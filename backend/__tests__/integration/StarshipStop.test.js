import request from 'supertest';

import app from '~/app';

describe('Starship', () => {
  it('should be able return how many stops a starship need to do', async () => {
    const response = await request(app)
      .post('/starships/stops')
      .send({
        name: 'Millennium Falcon"',
        consumables: '2 months',
        MGLT: '75',
      })
      .query({
        distance: 1000000,
      });

    expect(response.status).toEqual(200);
    expect(response.body.stops).toEqual(9);
  });
});
