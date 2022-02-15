export default class UnknownError extends Error {
  constructor(error: Error) {
    super(error.message)
    this.name = 'UnknownError'
  }
}