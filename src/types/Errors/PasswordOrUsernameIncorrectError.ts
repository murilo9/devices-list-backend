export default class PasswordOrUsernameIncorrectError extends Error {
  constructor() {
    super('Username or password is incorrect.')
    this.name = 'PasswordOrUsernameIncorrectError'
  }
}