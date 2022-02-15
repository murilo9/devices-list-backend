export default class CartNotFoundError extends Error {
  constructor() {
    super('Cart not found.')
    this.name = 'CartNotFoundError'
  }
}