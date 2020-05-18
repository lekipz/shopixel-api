import OutOfStockError from './out-of-stock-error';
import ProductNotFoundError from './product-not-found';
import Product from "./model";

export async function purchaseProduct(name) {
  let productToUpdate = await Product.findOne({name}).exec();

  if(!productToUpdate) {
    throw new ProductNotFoundError();
  }

  if(productToUpdate.currentStock === 0) {
    throw new OutOfStockError();
  }

  productToUpdate.currentStock --;
  return await productToUpdate.save();
}
