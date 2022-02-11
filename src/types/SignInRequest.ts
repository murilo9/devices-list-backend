import { Request } from "express";

export default interface SignInRequest extends Request {
  body: {
    username: string,
    password: string
  }
}