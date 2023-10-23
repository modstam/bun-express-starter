import { Router } from 'express';
import { assertRequestData } from 'src/assertions/exampleDataAssertion';
import { insertData } from 'src/services/mongodb.service';

const router = Router();

router.post('/', (req, res, next) => {
  const data = assertRequestData(req.body);
  const result = insertData(data);
  res.status(201).json(result);
});

export default router;
