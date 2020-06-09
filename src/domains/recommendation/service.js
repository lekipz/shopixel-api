import Recommendation from './model';

export function deleteByUserId(userId) {
  return Recommendation.deleteOne({
    user: userId
  }).exec();
}
