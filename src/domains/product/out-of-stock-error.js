export default class OutOfStockError extends Error {
  constructor() {
    super('This product is out of stock.');
    this.name = 'OutOfStockError'
  }
}
