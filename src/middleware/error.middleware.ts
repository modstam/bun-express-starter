import { BaseError } from '../errors/baseError';
import { Request, Response, NextFunction } from 'express';
import { logger } from '../logging/logger';

export const errorHandler = (error: Error | BaseError, _: Request, res: Response, __: NextFunction) => {
  if (error instanceof BaseError) {
    logger.error(error.message, error, error.errorObject);
    return res.status(error.status).send(error.message);
  }

  logger.error(error.message || 'Caught unknown error', error);
  return res.status(500).send('Internal server error');
};
