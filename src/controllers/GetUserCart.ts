import { Request } from "express"
import getUserCartFromDB from "../db/getUserCartFromDb"
import Controller from "../types/Controller"
import DeviceInCart from "../types/DeviceInCart"
import IRestrictAccessController from "../types/IRestricAccessController"

/**
 * Responsible for the Get User Cart flow. Verifies if user has access permission.
 */
export default class GetUserCartController extends Controller implements IRestrictAccessController {
  authorizator: (request: Request) => Promise<void>

  constructor(
    authorizator: (request: Request) => Promise<void>,
  ) {
    super()
    this.authorizator = authorizator
  }

  public async handle(request: Request): Promise<DeviceInCart[]> {
    const userId = request.headers['user-id'] as string
    const userCart = await getUserCartFromDB(userId)
    if (!userCart) {
      return []
    }
    return userCart.items
  }
}