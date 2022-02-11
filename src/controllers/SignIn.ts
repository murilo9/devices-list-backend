import getUserFromDb from "../db/getUserFromDb";
import Controller from "../types/Controller";
import IAssertiveController from "../types/IAssertiveController";
import Result from "../types/Result";
import ResultAsyncFunction from "../types/ResultAsyncFunction";
import SignInRequest from "../types/SignInRequest";
import jwt from 'jsonwebtoken';

export default class SignInController extends Controller implements IAssertiveController {
  validator: ResultAsyncFunction;

  constructor(validator: ResultAsyncFunction) {
    super();
    this.validator = validator;
  }

  async handle(request: SignInRequest): Promise<Result<any>> {
    const { username } = request.body;
    const getUser = await getUserFromDb(username);
    if (getUser.failed) {
      return getUser;
    }
    const user = getUser.payload;
    const userId = user._id;
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: 10800, // expires in 3 hours
    });
    return {
      failed: false,
      payload: token,
      statusCode: 200,
    }
  }
}