import express from 'express';
import 'express-async-errors'; // Replace this when express 5 is released
import bodyParser from 'body-parser';
import { logger } from './logging/logger';
import { errorHandler } from './middleware/error.middleware';
import router from './controllers/example.controller';
import { dbClose } from './services/mongodb.service';

const app = express();
const PORT = 7001;

app.use(bodyParser.json());

app.get('/health', (_, res) => res.status(200).send('OK'));
app.use('/api/example', router);

app.use(errorHandler);

const server = app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));

process.on('SIGTERM', function () {
  logger.info('Closing connections...');
  dbClose();
  server.close();
});
