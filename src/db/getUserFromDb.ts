import getClient from "../utils/getDbClient";
import User from "../types/User";
import UnexpectedDbError from "../types/Errors/UnexpectedDbError";

/**
 * Gets a user from database.
 * @param name The username to search for.
 * @returns 
 */
export default async function getUserFromDb(username: string): Promise<User | null> {
  const requestClientResult = await getClient();
  const client = requestClientResult
  const db = client.db();
  try {
    const collection = db.collection<User>('users');
    const user = await collection.findOne({ username });
    return user
  } catch (error) {
    console.log(error);
    throw new UnexpectedDbError();
  } finally {
    client.close();
  }
}