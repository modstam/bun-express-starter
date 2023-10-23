import { MongoClient } from 'mongodb';

export interface ExampleData {
  message: string;
}

const user = process.env.DB_USER || 'localUser';
const password = process.env.DB_PASSWORD || '1234';
const host = process.env.DB_HOST || 'localhost:27017';

const url = `mongodb://${user}:${password}@${host}`;
const dbName = 'data';

const collection = 'data';

const client = new MongoClient(url);
client.connect();
const db = client.db(dbName);

export const dbClose = () => client.close();

export const insertData = async (data: ExampleData): Promise<ExampleData> => {
  await db.collection<ExampleData>(collection).insertOne(data);
  return { ...data };
};
