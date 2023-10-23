import { z } from 'zod';
import { ExampleData } from 'src/services/mongodb.service';

export const assertRequestData = (input: object): ExampleData => {
  const schema = z.object({
    message: z.string(),
  });

  //schema.parse will throw if data is not in correct format
  const data: ExampleData = schema.parse(input);
  return data;
};
