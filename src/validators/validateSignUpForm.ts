import { Request } from "express";
import getUserFromDb from "../db/getUserFromDb";
import SignUpFormIncompleteError from "../types/Errors/SignUpFormIncomplete";
import SignUpPasswordsNotMatchError from "../types/Errors/SignUpPasswordsNotMatch";
import UsernameAlreadyRegisteredError from "../types/Errors/UsernameAlreadyRegisteredError";

/**
 * Validates a Sign Up request form.
 */
export default async function validateSignUpForm(request: Request): Promise<void> {
  const { username, password, passwordAgain } = request.body
  // Verify is all fields are present
  if (!username || !password || !passwordAgain) {
    throw new SignUpFormIncompleteError()
  }
  // Verify if passwords match
  if (password !== passwordAgain) {
    throw new SignUpPasswordsNotMatchError()
  }
  // Verify if username is already registered
  const usernameExists = await getUserFromDb(username)
  if (usernameExists) {
    throw new UsernameAlreadyRegisteredError()
  }
  // TODO validate password length
}