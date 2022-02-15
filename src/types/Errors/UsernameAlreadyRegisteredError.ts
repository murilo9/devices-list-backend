export default class UsernameAlreadyRegisteredError extends Error {
  constructor() {
    super('Username already in use.')
    this.name = 'UsernameAlreadyRegisteredError'
  }
}