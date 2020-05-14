import Product from './model'
import OutOfStockError from 'out-of-stock-error';
import * as ProductController from './controller'

export async function purchaseProduct(name) {
  let productToUpdate = await ProductController.findByName(name);

  if(productToUpdate.currentStock === 0) {
    throw new OutOfStockError();
  }

  productToUpdate.currentStock --;
  return ProductController.updateProduct(productToUpdate)
}
