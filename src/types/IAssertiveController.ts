import ResultAsyncFunction from './ResultAsyncFunction';

/**
 * A controller that validates request data before hadling.
 */
interface IAssertiveController {
  validator: ResultAsyncFunction;
}

export default IAssertiveController;
