import {Request, Response} from 'express';

import {db} from '../../database/database';

const CarRESTList = (req: Request, res: Response) => {
  db.all('SELECT * from car', [], (err: Error, rows: any[]) => {
    if (err) {
      console.error(err.stack);
      res.status(500).send('Something broke while listing!');
    }
    res.send(rows);
  });
};

export {CarRESTList};
