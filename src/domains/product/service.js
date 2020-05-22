import OutOfStockError from './out-of-stock-error';
import ProductNotFoundError from './product-not-found';
import Product from './model';

export async function purchaseProduct(name) {
  const productToUpdate = await Product.findOne({name}).exec();

  if (!productToUpdate) {
    throw new ProductNotFoundError();
  }

  if (productToUpdate.currentStock === 0) {
    throw new OutOfStockError();
  }

  productToUpdate.currentStock--;
  return productToUpdate.save();
}

export async function getRandomsForProfile(profile) {
  const rates = profile['category-rates'];
  const productPromises = Object.entries(rates)
    .flatMap(entry => Array(3).fill(entry))
    .map(([category, rate]) => {
      const rng = Math.random();
      if (rng <= rate) {
        return getRandomProductForCategory(category);
      }
      return null;
    });
  const randomProducts = await Promise.all(productPromises);
  const filteredProducts = randomProducts.filter(product => product !== null);

  if (filteredProducts.length === 0) {
    return getRandomsForProfile(profile);
  }
  return [...new Set(filteredProducts)];
}

export async function refillProductStock(name) {
  const productToRefill = await Product.findOne({name}).exec()

  if (!productToRefill) {
    throw new ProductNotFoundError();
  }

  const productRefillNumber = productToRefill.maxStock - productToRefill.currentStock;

  for(let i = 0; i < productRefillNumber; i++) {
    setTimeout(function () {
      productToRefill.currentStock++;
    }, 1500)
  }
  return productToRefill.save();
}

async function getRandomProductForCategory(category) {
  const count = await Product.count({category}).exec();
  const rng = Math.floor(Math.random() * count);
  const randomProducts = await Product.find({category}).limit(1).skip(rng).exec();
  return randomProducts[0];
}
