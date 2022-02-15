import { Request } from "express";
import getPasswordFromDatabase from "../db/getPasswordFromDb";
import getUserFromDb from "../db/getUserFromDb";
import bcrypt from 'bcrypt'
import PasswordOrUsernameIncorrectError from "../types/Errors/PasswordOrUsernameIncorrectError";

export default async function validateSignInForm(request: Request): Promise<void> {
  const { username, password } = request.body;
  // Verify if user exists
  const user = await getUserFromDb(username);
  if (!user) {
    throw new PasswordOrUsernameIncorrectError()
  }
  // Get user password hash
  const userPassword = await getPasswordFromDatabase(user._id);
  if (!userPassword) {
    throw new PasswordOrUsernameIncorrectError()
  }
  const { hash } = userPassword;
  // Verify if password and hash match
  console.log(password, hash)
  const match = await bcrypt.compare(password, hash);
  if (!match) {
    console.log('no match', hash)
    throw new PasswordOrUsernameIncorrectError()
  }
}