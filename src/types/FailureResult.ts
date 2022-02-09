/**
 * Result of any failing operation.
 */
type FailureResult = {
  statusCode: number,
  payload: any,
  failed: true
}

export default FailureResult;
