import { Request } from "express"
import getUserCartFromDB from "../db/getUserCartFromDb"
import Cart from "../types/Cart"
import Controller from "../types/Controller"
import DeviceInCart from "../types/DeviceInCart"
import CartNotFoundError from "../types/Errors/CartNotFoundError"
import IRestrictAccessController from "../types/IRestricAccessController"

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
      throw new CartNotFoundError()
    }
    return userCart.items
  }
}