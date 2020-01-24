import startwarsApi from '~/services/startwars.api';

class StarshiptController {
  async index(request, response) {
    const apiResponse = await startwarsApi.get('/starships', {
      params: { format: 'json' },
    });

    const starships = apiResponse.data.results;

    return response.json(starships);
  }
}

export default new StarshiptController();
