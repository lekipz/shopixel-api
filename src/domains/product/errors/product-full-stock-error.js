export default class ProductFullStockError extends Error {
  constructor() {
    super('This product is already at it s max stock');
    this.name = 'ProductFullStockError'
  }
}
