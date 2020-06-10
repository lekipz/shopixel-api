import * as UserService from './service';
import * as RecommendationService from '../recommendation/service';
import Ok from '../../lib/responses/statuses/ok';
import NoContent from '../../lib/responses/statuses/no-content';
import User from './model';
import NotFound from '../../lib/responses/statuses/not-found';

export async function findRandomUser() {
  const randomUser = await UserService.findRandomUser();
  if (randomUser) {
    return new Ok(randomUser);
  }
  return new NoContent();
}

export async function getRecommendationsForUser(userId) {
  const recommendation = await RecommendationService.findByUserId(userId);
  if (!recommendation) {
    return new NotFound(`Could not found any recommendation for user with ID : ${userId}.`);
  }

  return new Ok(recommendation);
}

export async function createRecommendationsForUser(userId, shoppingList) {
  const user = await User.findById(userId);
  if (!user) {
    return new NotFound(`Could not found user with ID : ${userId}.`);
  }

  await UserService.startRecommendationsGeneration({
    user: userId,
    shoppingList
  });

  return new NoContent();
}
