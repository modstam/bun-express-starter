export class BaseError extends Error {
	status: number;
	errorObject: Record<string, any> = {};

	public constructor(message: string, statusCode: number, error: Record<string, any>) {
		super(message);
		this.errorObject = error;
		this.status = statusCode;
	}
}
