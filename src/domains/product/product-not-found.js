export default class OutOfStockError extends Error {
  constructor() {
    super('This product was not found');
    this.name = 'ProductNotFound'
  }
}
