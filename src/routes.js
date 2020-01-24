import { Router } from 'express';

import StarshipController from '~/controllers/StarshipController';

const routes = new Router();

routes.get('/starships', StarshipController.index);

export default routes;
