import getClient from "../utils/getDbClient";;
import User from "../types/User";
import UnexpectedDbError from "../types/Errors/UnexpectedDbError";

export default async function insertUserOnDb(username: string): Promise<User> {
  const requestClientResult = await getClient();
  const client = requestClientResult;
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
    return user
  } catch (error) {
    console.log(error);
    throw new UnexpectedDbError();
  } finally {
    client.close();
  }
}