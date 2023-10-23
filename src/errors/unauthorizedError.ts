import { BaseError } from './baseError';

export class UnauthorizedError extends BaseError {
	public constructor(message = 'UnauthorizedError', statusCode = 401, error: Record<string, any> = {}) {
		super(message, statusCode, error);
	}
}
