import getClient from "../utils/getDbClient";
import UnexpectedDbError from "../types/Errors/UnexpectedDbError";
import Cart from "../types/Cart";

export default async function getUserCartFromDB(userId: string): Promise<Cart> {
  const requestClientResult = await getClient();
  const client = requestClientResult
  const db = client.db();
  try {
    const collection = db.collection<Cart>('carts');
    const cart = await collection.findOne({ user: userId })
    return cart
  } catch (error) {
    console.log(error);
    throw new UnexpectedDbError();
  }
  finally {
    client.close();
  }
}