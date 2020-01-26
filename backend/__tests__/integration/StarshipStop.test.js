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

  it('should return a error when dont pass distance to get starship stops', async () => {
    const response = await request(app)
      .post('/starships/stops')
      .send({
        name: 'Millennium Falcon"',
        consumables: '2 months',
        MGLT: '75',
      });

    expect(response.status).toEqual(400);
  });

  it('should return a error when dont pass starship informations to get stops', async () => {
    const response = await request(app)
      .post('/starships/stops')
      .query({
        distance: 1000000,
      });

    expect(response.status).toEqual(400);
  });
});
