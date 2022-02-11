import { MongoClient, ObjectId } from "mongodb";
import Device from "../types/Device";
import Result from "../types/Result";
import getClient from "../utils/getDbClient";
import devicesList from '../devicesList';
import CreateUserForm from "../types/CreateUserForm";
import User from "../types/User";

export default async function insertUserOnDb(username: string): Promise<Result<User>> {
  const requestClientResult = await getClient();
  if (requestClientResult.failed) {
    return requestClientResult;
  }
  const client = requestClientResult.payload as MongoClient;
  const db = client.db();
  try {
    const collection = db.collection<User>('users');
    const userToCreate = {
      username,
      created: new Date(),
      updated: new Date()
    }
    await collection.insertOne(userToCreate);
    const user = await collection.findOne({ username })
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