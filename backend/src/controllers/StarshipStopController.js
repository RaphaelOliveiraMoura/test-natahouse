import getStarshipStops from '~/utils/getStarshipStops';

class StarshipStopsController {
  async show(request, response) {
    const { distance } = request.query;

    if (!distance) {
      return response
        .status(400)
        .json({ error: 'You need provide a distance' });
    }

    const starship = request.body;

    if (!starship) {
      return response
        .status(400)
        .json({ error: 'You need provide the starship' });
    }

    return response.json({
      distance,
      stops: getStarshipStops(starship, distance),
    });
  }
}

export default new StarshipStopsController();
