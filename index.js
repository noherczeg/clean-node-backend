const express = require('express');
const bodyParser = require('body-parser');

const { CarRESTCreate } = require('./car/CarRESTCreate');
const { CarRESTList } = require('./car/CarRESTList');

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/car', CarRESTList);
app.post('/car', CarRESTCreate);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
