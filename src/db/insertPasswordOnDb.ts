import UnexpectedDbError from '../types/Errors/UnexpectedDbError';
import { Password } from '../types/Password';
import getClient from '../utils/getDbClient';

export default async function inserPasswordOnDatabase(hash: string, userId: string): Promise<void> {
  const requestClientResult = await getClient();
  const client = requestClientResult
  const db = client.db();
  try {
    const passwordToInsert = {
      created: new Date(),
      updated: new Date(),
      hash,
      userId,
    };
    const collection = db.collection<Password>('passwords')
    await collection.insertOne(passwordToInsert);
  } catch (error) {
    console.log(error);
    throw new UnexpectedDbError();
  } finally {
    client.close();
  }
}