import { Request } from "express";

/**
 * A controller that validates request data before hadling.
 */
interface IAssertiveController {
  validator: (request: Request) => Promise<void>;
}

export default IAssertiveController;
