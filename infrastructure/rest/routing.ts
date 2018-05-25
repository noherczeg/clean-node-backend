import {Router} from 'express';

import {CarRESTCreate} from './car/CarRESTCreate';
import {CarRESTList} from './car/CarRESTList';

const routes = Router();
routes.get('/', (req, res) => res.send('Hello World!'));
routes.get('/car', CarRESTList);
routes.post('/car', CarRESTCreate);

export {routes};
