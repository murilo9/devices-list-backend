export default class SignUpPasswordsNotMatchError extends Error {
  constructor() {
    super('Passwords must match.')
    this.name = 'SignUpPasswordsNotMatchError'
  }
}