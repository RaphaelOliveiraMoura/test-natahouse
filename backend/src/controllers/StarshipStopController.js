import getStarshipStops from '~/utils/getStarshipStops';

class StarshipStopsController {
  async show(request, response) {
    const { distance } = request.query;

    if (!distance) {
      return response
        .status(400)
        .json({ error: 'You need provide a distance' });
    }

    const { consumables, MGLT } = request.body;

    if (!consumables || !MGLT) {
      return response
        .status(400)
        .json({ error: 'You need provide starship informations' });
    }

    return response.json({
      distance,
      stops: getStarshipStops({ consumables, MGLT }, distance),
    });
  }
}

export default new StarshipStopsController();
