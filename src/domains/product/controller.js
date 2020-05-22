import Product from './model';
import * as ProductService from './service';
import * as CustomerService from '../customer/service';
import NotFound from '../../lib/responses/statuses/not-found';
import Ok from '../../lib/responses/statuses/ok';
import BadRequest from '../../lib/responses/statuses/bad-request';

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

export async function generateShoppingList(profileName) {
  try {
    const profile = await CustomerService.getProfileByName(profileName);
    const products = await ProductService.getRandomsForProfile(profile);
    return new Ok(products);
  } catch (e) {
    if (e.name === 'InvalidProfileError') {
      return new BadRequest('invalid-profile', e.message);
    }
    throw e;
  }
}

export async function purchaseProduct(name) {
  try {
    const updatedProduct = await ProductService.purchaseProduct(name);
    return new Ok(updatedProduct.toJSON());
  } catch (error) {
    const {message, name} = error;
    if (error.name === 'ProductNotFoundError') {
      return new NotFound(message);
    }
    if (error.name === 'OutOfStockError') {
      return new BadRequest(name, message);
    }
    throw error;
  }
}

export async function refillProductStock(name) {
  try {
    const refilledProduct = await ProductService.refillProductStock(name);
    return new Ok(refilledProduct.toJSON());
  } catch (error) {
    const {message, name} = error;
    if(error.name === 'ProductNotFoundError') {
      return new NotFound(message);
    }
    if(error.name === 'ProductFullStockError') {
      return new BadRequest(message)
    }
    throw error;
  }
}
