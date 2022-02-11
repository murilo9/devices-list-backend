import getUserFromDb from "../db/getUserFromDb";
import inserPasswordOnDatabase from "../db/insertPasswordOnDb";
import insertUserOnDb from "../db/insertUserOnDb";
import Controller from "../types/Controller";
import CreateUserRequest from "../types/CreateUserRequest";
import Result from "../types/Result";
import getPasswordHash from "../utils/getPasswordHash";

export default class SignUpController extends Controller {
  async handle(request: CreateUserRequest): Promise<Result<string>> {
    const { username, password } = request.body
    // Verify if username is already registered
    const verifyUsername = await getUserFromDb(username)
    if (verifyUsername.failed) {
      return verifyUsername
    }
    const usernameExists = verifyUsername.payload
    if (usernameExists) {
      return {
        failed: true,
        statusCode: 400,
        payload: 'Username already registered.'
      }
    }
    // Insert user on database
    const insertUser = await insertUserOnDb(username)
    if (insertUser.failed) {
      return insertUser
    }
    // Insert user password on database
    const passwordHash = await getPasswordHash(password);
    const createPasswordResult = await inserPasswordOnDatabase(passwordHash, insertUser.payload._id);
    if (createPasswordResult.failed) {
      return createPasswordResult;
    }
    return {
      failed: false,
      payload: 'User created successfully.',
      statusCode: 201
    }
  }
}