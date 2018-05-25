import * as express from 'express';
import * as bodyParser from 'body-parser';

import {routes} from './infrastructure/rest/routing';
import {responseType} from './infrastructure/rest/middleware';

const app = express();

app.use(bodyParser.json());
app.use(responseType);
app.use('/', routes);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
