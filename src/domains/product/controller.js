import Product from './model';
import NotFound from '../../lib/responses/statuses/not-found';
import Ok from '../../lib/responses/statuses/ok';

export async function findAll() {
  const products = await Product.find({});
  return new Ok(products.toJSON());
}

export async function findByName(name) {
  const product = await Product.findOne({name}).exec();
  if (product == null) {
    return new NotFound(`Could not found product named ${name}.`);
  }
  return new Ok(product.toJSON());
}
