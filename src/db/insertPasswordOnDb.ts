import { MongoClient } from 'mongodb';
import { Password } from '../types/Password';
import Result from '../types/Result';
import getClient from '../utils/getDbClient';

export default async function inserPasswordOnDatabase(hash: string, userId: string): Promise<Result<Password>> {
  const requestClientResult = await getClient();
  if (requestClientResult.failed) {
    return requestClientResult;
  }
  const client = requestClientResult.payload as MongoClient;
  const db = client.db();
  try {
    const passwordToInsert = {
      created: new Date(),
      updated: new Date(),
      hash,
      userId,
    };
    await db.collection('passwords').insertOne(passwordToInsert);
    return {
      failed: false,
      payload: passwordToInsert,
      statusCode: 201,
    };
  } catch (error) {
    console.log(error);
    return {
      failed: true,
      payload: error,
      statusCode: 500,
    };
  } finally {
    client.close();
  }
}