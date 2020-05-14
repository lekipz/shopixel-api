import Product from './model';
import NotFound from '../../lib/responses/statuses/not-found';
import Ok from '../../lib/responses/statuses/ok';
import * as ProductService from './service'
import BadRequest from "../../lib/responses/statuses/bad-request";

export async function findAll() {
  const products = await Product.find({});
  return new Ok(products);
}

export async function findByName(name) {
  const product = await Product.findOne({name}).exec();
  if (product == null) {
    return new NotFound(`Could not found product named ${name}.`);
  }
  return new Ok(product.toJSON());
}

export async function purchaseProduct(name) {
  try {
    const updatedProduct = await ProductService.purchaseProduct(name);
    return new Ok(updatedProduct.toJSON())
  } catch (error) {
    const {message, name} = error;
    if(error.name === 'ProductNotFoundError') {
      return new NotFound(name, message);
    }
    if(error.name === 'OutOfStockError') {
      return new BadRequest(name, message);
    }
    throw error
  }
}
