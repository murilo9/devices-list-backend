import { MongoClient, ObjectId } from "mongodb";
import Device from "../types/Device";
import Result from "../types/Result";
import getClient from "../utils/getDbClient";
import devicesList from '../devicesList';
import User from "../types/User";

/**
 * Verify if a username already exists (true) or not (false).
 * @param name The username to search for.
 * @returns 
 */
export default async function getUserNameFromDb(name: string): Promise<Result<boolean>> {
  const requestClientResult = await getClient();
  if (requestClientResult.failed) {
    return requestClientResult;
  }
  const client = requestClientResult.payload as MongoClient;
  const db = client.db();
  try {
    const collection = db.collection<User>('users');
    const users = await collection.find({ username: name }).toArray() as User[];
    return {
      failed: false,
      payload: users.length > 0,
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