import { MongoClient, ObjectId } from 'mongodb';
import { Password } from '../types/Password';
import Result from '../types/Result';
import getClient from '../utils/getDbClient';

export default async function getPasswordFromDatabase(userId: string): Promise<Result<Password | string>> {
  const requestClientResult = await getClient();
  if (requestClientResult.failed) {
    return requestClientResult;
  }
  const client = requestClientResult.payload as MongoClient;
  const db = client.db();
  try {
    const password = await db.collection('passwords').findOne({ userId: new ObjectId(userId) }) as unknown as Password;
    return {
      failed: false,
      statusCode: password ? 200 : 400,
      payload: password || 'Password or username is incorrect.',
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
