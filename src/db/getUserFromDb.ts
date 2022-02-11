import { MongoClient, ObjectId } from "mongodb";
import Result from "../types/Result";
import getClient from "../utils/getDbClient";
import User from "../types/User";

/**
 * Gets a user from database.
 * @param name The username to search for.
 * @returns 
 */
export default async function getUserFromDb(username: string): Promise<Result<User>> {
  const requestClientResult = await getClient();
  if (requestClientResult.failed) {
    return requestClientResult;
  }
  const client = requestClientResult.payload as MongoClient;
  const db = client.db();
  try {
    const collection = db.collection<User>('users');
    const user = await collection.findOne({ username }) as User;
    return {
      failed: false,
      payload: user,
      statusCode: 200
    }
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