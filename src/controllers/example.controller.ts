import { Router } from 'express';
import { assertRequestData } from 'src/assertions/exampleDataAssertion';
import { insertData, getAllData } from 'src/services/mongodb.service';

const router = Router();

router.post('/', async (req, res, next) => {
  const data = assertRequestData(req.body);
  const result = await insertData(data);
  res.status(201).json(result);
});

router.get('/all', async (req, res, next) => {
  const result = await getAllData();
  res.status(200).json(result);
});

export default router;
