import startwarsApi from '~/services/startwars.api';

import getStarshipStops from '~/utils/getStarshipStops';

class StarshipStopsController {
  async index(request, response) {
    const { distance } = request.query;

    if (!distance) {
      return response
        .status(400)
        .json({ error: 'You need provide a distance' });
    }

    const apiResponse = await startwarsApi.get('/starships', {
      params: { format: 'json' },
    });

    const starships = apiResponse.data.results.map(starship => ({
      ...starship,
      stops: getStarshipStops(starship, distance),
    }));

    return response.json(starships);
  }
}

export default new StarshipStopsController();
