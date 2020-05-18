export default class ProductNotFoundError extends Error {
  constructor() {
    super('This product was not found');
    this.name = 'ProductNotFoundError'
  }
}
