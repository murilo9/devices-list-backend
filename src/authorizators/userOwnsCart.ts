import { Request } from "express";
import getUserCartFromDB from "../db/getUserCartFromDb";
import Cart from "../types/Cart";
import CartNotFoundError from "../types/Errors/CartNotFoundError";
import UnauthorizedAccessError from "../types/Errors/UnauthorizedAccessError";

export default async function userOwnsCart(request: Request): Promise<void> {
  const userId = request.headers['user-id'] as string
  const userCart = await getUserCartFromDB(userId)
  if (!userCart) {
    // Here, the inexistence of the cart is not a problem at all bceause it may be created later, so we let it pass
    return
  }
  if (userCart.user !== userId) {
    throw new UnauthorizedAccessError()
  }
}