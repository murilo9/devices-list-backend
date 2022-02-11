import { Request } from "express";
import getPasswordFromDatabase from "../db/getPasswordFromDb";
import getUserFromDb from "../db/getUserFromDb";
import Result from "../types/Result";
import bcrypt from 'bcrypt'

export default async function validateSignInForm(request: Request): Promise<Result<string>> {
  const { username, password } = request.body;
  // Verify if user exists
  const getUser = await getUserFromDb(username);
  if (getUser.failed) {
    return getUser;
  }
  if (!getUser.payload) {
    return {
      failed: true,
      payload: 'User does not exist.',
      statusCode: 400
    }
  }
  const user = getUser.payload;
  const userId = user._id;
  // Get user password hash
  const getPassword = await getPasswordFromDatabase(userId);
  if (getPassword.failed) {
    return getPassword;
  }
  if (getPassword.statusCode === 400) {
    return getPassword as Result<string>;
  }
  const userPassword = getPassword.payload;
  const { hash } = userPassword;
  // Verify if password and hash match
  console.log(password, hash)
  const match = await bcrypt.compare(password, hash);
  if (!match) {
    console.log('no match', hash)
    return {
      failed: true,
      payload: 'Username or password is incorrect.',
      statusCode: 400,
    }
  }
  return {
    failed: false,
  }
}