export default class GetDbClientError extends Error {
  constructor() {
    super('Something went wrong in our server. Please try again.')
    this.name = 'GetDbClientError'
  }
}