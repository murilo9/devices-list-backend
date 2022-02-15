import getClient from "../utils/getDbClient";;
import UnexpectedDbError from "../types/Errors/UnexpectedDbError";
import Cart from "../types/Cart";
import DeviceInCart from "../types/DeviceInCart";

/**
 * Upserts (update if exists, insert if not exist) a cart on the database.
 * @param userId Cart owner's ID.
 * @param items Cart's devices list.
 * @returns 
 */
export default async function upsertUserCartOnDb(userId: string, items: DeviceInCart[]): Promise<Cart> {
  const requestClientResult = await getClient();
  const client = requestClientResult;
  const db = client.db();
  try {
    const collection = db.collection<Cart>('carts');
    const upsert = await collection.findOneAndUpdate({ user: userId }, { $set: { user: userId, items } }, { upsert: true })
    return upsert.value
  } catch (error) {
    console.log(error);
    throw new UnexpectedDbError();
  } finally {
    client.close();
  }
}