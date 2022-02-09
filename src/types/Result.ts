import FailureResult from './FailureResult';
import SuccessResult from './SuccessResult';

/**
 * Result of any operation.
 */
type Result<T> = SuccessResult<T> | FailureResult

export default Result;
