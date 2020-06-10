import * as ProductService from '../product/service';
import Recommendation from './model';

export async function findByUserId(userId) {
  const recommendation = await Recommendation.findOne({
    user: userId
  }).populate('products').exec();

  if (!recommendation || recommendation.generated) {
    return recommendation;
  }

  const products = await Promise.all(recommendation.categories.map(category => ProductService.getRandomProductForCategory(category)));
  recommendation.generated = true;
  recommendation.products = products;
  return recommendation.save()
}

export async function deleteByUserId(userId) {
  return Recommendation.deleteOne({
    user: userId
  }).exec();
}
