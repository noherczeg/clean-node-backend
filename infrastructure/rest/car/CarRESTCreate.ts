import {Request, Response} from 'express';

import {db} from '../../database/database';
import {Car} from '../../../domain/Car';

const CarRESTCreate = (req: Request, res: Response) => {
  // TODO: introduce request and response types
  const {color, engine} = req.body;
  try {
    const car = Car.createDefault(color, engine);
    runDBOperation(car, function (err: Error) {
      if (err) {
        console.error(err.stack);
        res.status(500).send('Something broke while creating!');
      }
      // get the last insert id
      res.status(204).send();
      console.log(`A Car has been inserted with row id: ${this.lastID}`);
    });
  } catch (err) {
    console.error(err.stack);
    res.status(400).send(err.message);
  }
};

function runDBOperation(car: Car, cb: (err: Error) => void) {
  db.run(`INSERT INTO car(color) VALUES(?)`, [car.color], cb);
}

export {CarRESTCreate};
