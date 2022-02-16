export default class SignUpFormIncompleteError extends Error {
  constructor() {
    super('All fields must be filled.')
    this.name = 'SignUpFormIncompleteError'
  }
}