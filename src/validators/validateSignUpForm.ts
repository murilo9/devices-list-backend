import { Request } from "express";
import getUserFromDb from "../db/getUserFromDb";
import UsernameAlreadyRegisteredError from "../types/Errors/UsernameAlreadyRegisteredError";

export default async function validateSignUpForm(request: Request): Promise<void> {
  const { username, password } = request.body;
  // Verify if username is already registered
  const usernameExists = await getUserFromDb(username)
  if (usernameExists) {
    throw new UsernameAlreadyRegisteredError()
  }
  // TODO validate password length
}