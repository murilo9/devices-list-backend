import getUserFromDb from "../db/getUserFromDb";
import Controller from "../types/Controller";
import IAssertiveController from "../types/IAssertiveController";
import SignInRequest from "../types/SignInRequest";
import jwt from 'jsonwebtoken';
import { Request } from "express";
import SignInResponse from "../types/SignInResponse";

export default class SignInController extends Controller implements IAssertiveController {
  validator: (request: Request) => Promise<void>;

  constructor(validator: (request: Request) => Promise<void>) {
    super();
    this.validator = validator;
  }

  async handle(request: SignInRequest): Promise<SignInResponse> {
    const { username } = request.body;
    const user = await getUserFromDb(username);
    const userId = user._id;
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: 10800, // expires in 3 hours
    });
    return {
      token,
      userId: user._id,
      username: user.username
    }
  }
}