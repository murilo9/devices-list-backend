import { Request } from "express";
import inserPasswordOnDatabase from "../db/insertPasswordOnDb";
import insertUserOnDb from "../db/insertUserOnDb";
import Controller from "../types/Controller";
import CreateUserRequest from "../types/CreateUserRequest";
import IAssertiveController from "../types/IAssertiveController";
import User from "../types/User";
import getPasswordHash from "../utils/getPasswordHash";

/**
 * Responsible for the Sign Up flow. Validates form data.
 */
export default class SignUpController extends Controller implements IAssertiveController {
  validator: (request: Request) => Promise<void>;

  constructor(validator: (request: Request) => Promise<void>) {
    super()
    this.validator = validator
  }

  async handle(request: CreateUserRequest): Promise<User> {
    const { username, password } = request.body
    // Insert user on database
    const user = await insertUserOnDb(username)
    // Insert user password on database
    const passwordHash = await getPasswordHash(password);
    await inserPasswordOnDatabase(passwordHash, user._id);
    return user
  }
}