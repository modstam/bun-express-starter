import pino from 'pino';

const application = 'exampleApp';

const pinoLogger =
  process.env.NODE_ENV === 'development'
    ? pino({
        formatters: {
          level: (label: string) => ({ level: label }),
        },
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
          },
        },
      })
    : pino({
        formatters: {
          level: (label: string) => ({ level: label }),
        },
      });

const createLogObject = (error?: Error, object?: any) => ({
  error: {
    name: error?.name,
    message: error?.message,
    stack: error?.stack,
    cause: error?.cause,
  },
  object: { ...object },
});

export const logger = {
  info: (msg: string, error?: Error, object?: any, ...args: any[]) =>
    pinoLogger.info({ application, ...createLogObject(error, object) }, msg, args),
  error: (msg: string, error?: Error, object?: any, ...args: any[]) =>
    pinoLogger.error({ application, ...createLogObject(error, object) }, msg, args),
};
