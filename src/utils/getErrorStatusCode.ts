import GetDbClientError from "../types/Errors/GetDbClientError";
import PasswordOrUsernameIncorrectError from "../types/Errors/PasswordOrUsernameIncorrectError";
import UnexpectedDbError from "../types/Errors/UnexpectedDbError";
import UnknownError from "../types/Errors/UnknownError";
import UsernameAlreadyRegisteredError from "../types/Errors/UsernameAlreadyRegisteredError";

export default function getErrorStatusCode(error: Error): number {
  if (error instanceof GetDbClientError) {
    return 500
  }
  if (error instanceof PasswordOrUsernameIncorrectError) {
    return 400
  }
  if (error instanceof UnexpectedDbError) {
    return 500
  }
  if (error instanceof UsernameAlreadyRegisteredError) {
    return 400
  }
  if (error instanceof UnknownError) {
    return 500
  }
  return 500
}