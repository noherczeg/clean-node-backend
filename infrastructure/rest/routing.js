const routes = require('express').Router();

const {CarRESTCreate} = require('../../infrastructure/rest/car/CarRESTCreate');
const {CarRESTList} = require('../../infrastructure/rest/car/CarRESTList');

routes.get('/', (req, res) => res.send('Hello World!'));
routes.get('/car', CarRESTList);
routes.post('/car', CarRESTCreate);

module.exports = {routes};
