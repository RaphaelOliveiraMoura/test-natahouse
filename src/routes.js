import { Router } from 'express';

import StarshipController from '~/controllers/StarshipController';
import StarshipStopController from '~/controllers/StarshipStopController';

const routes = new Router();

routes.get('/starships', StarshipController.index);
routes.get('/starships/stops', StarshipStopController.index);

export default routes;
