import UnexpectedDbError from '../types/Errors/UnexpectedDbError';
import { Password } from '../types/Password';
import getClient from '../utils/getDbClient';

export default async function getPasswordFromDatabase(userId: string): Promise<Password | null> {
  const requestClientResult = await getClient();
  const client = requestClientResult
  const db = client.db();
  try {
    const collection = db.collection<Password>('passwords')
    const password = await collection.findOne({ userId });
    return password
  } catch (error) {
    console.log(error);
    throw new UnexpectedDbError();
  } finally {
    client.close();
  }
}
