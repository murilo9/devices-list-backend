import { MongoClient } from 'mongodb';
import GetDbClientError from '../types/Errors/GetDbClientError';

/**
 * Gets a mongodb client instance for querying.
 */
export default async function getClient(): Promise<MongoClient> {
  const PORT = process.env.MONGODB_CONNECTION_PORT;
  const DB_NAME = process.env.MONGODB_DATABASE;
  const USER = process.env.MONGODB_USERNAME;
  const PASSWORD = process.env.MONGODB_PASSWORD;
  try {
    // console.log('getting client:', PORT, DB_NAME, USER, PASSWORD);
    const mongoClient = await MongoClient.connect(`mongodb://${USER}:${PASSWORD}@localhost:${PORT}/${DB_NAME}`);
    return mongoClient
  } catch (error) {
    console.log(error);
    throw new GetDbClientError();
  }
}