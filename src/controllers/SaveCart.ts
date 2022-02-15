import { Request } from "express";
import upsertUserCartOnDb from "../db/upsertUserCartOnDb";
import Cart from "../types/Cart";
import Controller from "../types/Controller";
import IAssertiveController from "../types/IAssertiveController";
import IRestrictAccessController from "../types/IRestricAccessController";

export default class SaveCartController extends Controller implements IAssertiveController, IRestrictAccessController {
  authorizator: (request: Request) => Promise<void>
  validator: (request: Request) => Promise<void>

  constructor(
    authorizator: (request: Request) => Promise<void>,
    validator: (request: Request) => Promise<void>
  ) {
    super()
    this.validator = validator
    this.authorizator = authorizator
  }

  public async handle(request: Request): Promise<Cart> {
    const userId = request.headers['user-id'] as string
    const { items } = request.body
    const updatedCart = await upsertUserCartOnDb(userId, items)
    return updatedCart
  }
}