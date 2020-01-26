import startwarsApi from '~/services/startwars.api';

class StarshiptController {
  async index(request, response) {
    const { page, name: search } = request.query;

    const apiResponse = await startwarsApi.get('/starships', {
      params: { format: 'json', page, search },
    });

    const { results: starships, next: nextUrl } = apiResponse.data;

    const nextpage = nextUrl ? new URL(nextUrl).searchParams.get('page') : null;

    return response.set({ nextpage }).json(starships);
  }
}

export default new StarshiptController();
