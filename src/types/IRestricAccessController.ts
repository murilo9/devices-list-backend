import ResultAsyncFunction from './ResultAsyncFunction';

/**
 * A controller that verifies if the user has permission to access the requested resource before handling.
 */
interface IRestrictAccessController {
  authorizator: ResultAsyncFunction;
}

export default IRestrictAccessController;
