import { Request } from "express";

/**
 * A controller that verifies if the user has permission to access the requested resource before handling.
 */
interface IRestrictAccessController {
  authorizator: (request: Request) => Promise<void>;
}

export default IRestrictAccessController;
