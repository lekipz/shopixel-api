import Recommendation from './model';

export function findByUserId(userId) {
  return Recommendation.findOne({
    user: userId
  }).exec();
}

export async function deleteByUserId(userId) {
  return Recommendation.deleteOne({
    user: userId
  }).exec();
}
