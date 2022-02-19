import { Request } from "express";
import getUserCartFromDB from "../db/getUserCartFromDb";
import UnauthorizedAccessError from "../types/Errors/UnauthorizedAccessError";

/**
 * Verifies if the requesting user is owner of the requested cart. 
 */
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