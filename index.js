const express = require('express');
const bodyParser = require('body-parser');

const {routes} = require('./infrastructure/rest/routing');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});
app.use('/', routes);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
