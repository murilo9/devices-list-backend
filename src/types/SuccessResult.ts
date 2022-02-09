/**
 * Result of any successfull operation.
 */
type SuccessResult<T> = {
  failed: false,
  payload?: T,
  statusCode?: number
}

export default SuccessResult;
