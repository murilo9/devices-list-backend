import GetDbClientError from "../types/Errors/GetDbClientError";
import MalformedCartError from "../types/Errors/MalformedCartError";
import PasswordOrUsernameIncorrectError from "../types/Errors/PasswordOrUsernameIncorrectError";
import SignUpFormIncompleteError from "../types/Errors/SignUpFormIncomplete";
import UnauthorizedAccessError from "../types/Errors/UnauthorizedAccessError";
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
  if (error instanceof MalformedCartError) {
    return 400
  }
  if (error instanceof UnauthorizedAccessError) {
    return 403
  }
  if (error instanceof SignUpFormIncompleteError) {
    return 400
  }
  if (error instanceof SignUpFormIncompleteError) {
    return 400
  }
  // Default error status code is 500 (for REALLY unexpected errors, out of domain scope)
  return 500
}