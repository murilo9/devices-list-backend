import { MongoClient } from 'mongodb';
import Result from '../types/Result';

export default async function getClient(): Promise<Result<MongoClient>> {
  const PORT = process.env.MONGODB_CONNECTION_PORT;
  const DB_NAME = process.env.MONGODB_DATABASE;
  const USER = process.env.MONGODB_USERNAME;
  const PASSWORD = process.env.MONGODB_PASSWORD;
  try {
    // console.log('getting client:', PORT, DB_NAME, USER, PASSWORD);
    const mongoClient = await MongoClient.connect(`mongodb://${USER}:${PASSWORD}@localhost:${PORT}/${DB_NAME}`);
    return {
      failed: false,
      payload: mongoClient,
    };
  } catch (error) {
    console.log(error);
    return {
      failed: true,
      statusCode: 500,
      payload: 'Erro requesting mongodb client',
    };
  }
}