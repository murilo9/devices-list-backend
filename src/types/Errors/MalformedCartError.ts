export default class MalformedCartError extends Error {
  constructor() {
    super('Malformed cart data.')
    this.name = 'MalformedCartError'
  }
}