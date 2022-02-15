export default class UnexpectedDbError extends Error {
  constructor() {
    super('Something went wrong in our server. Please try again.')
    this.name = 'UnexpectedDbError'
  }
}