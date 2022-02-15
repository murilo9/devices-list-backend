export default class UnauthorizedAccessError extends Error {
  constructor() {
    super('You do not have permission to access that resource.')
    this.name = 'UnauthorizedAccessError'
  }
}