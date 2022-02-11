import Result from './Result';

type ResultAsyncFunction = (...args: any[]) => Promise<Result<any>>

export default ResultAsyncFunction;