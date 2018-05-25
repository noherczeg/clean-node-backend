import {Request, Response, NextFunction} from 'express';

export const responseType = (req: Request, res: Response, next: NextFunction) => {
    res.header('Content-Type', 'application/json');
    next();
};
