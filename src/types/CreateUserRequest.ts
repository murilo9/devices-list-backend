import { Request } from "express";
import CreateUserForm from "./CreateUserForm";

export default interface CreateUserRequest extends Request {
  body: CreateUserForm
}