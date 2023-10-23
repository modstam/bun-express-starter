import { BaseError } from './baseError';

export class BadRequestError extends BaseError {
  public constructor(message = 'badRequestError', statusCode = 400, error: Record<string, any> = {}) {
    super(message, statusCode, error);
  }
}
