import User from './model';
import {hash} from '../../lib/security/bcrypt';
import {getRandomProfile} from '../customer/service';
import * as RecommendationService from '../recommendation/service';
import {putRecord} from '../../lib/kinesis';

export async function create(body) {
  const user = new User(body);
  await user.save();

  const hashedPassword = await hash(user.password);
  user.set('password', hashedPassword);

  const profile = await getRandomProfile();
  user.set('profile', profile.profile);

  return await user.save();
}

export async function findRandomUser() {
  const count = await User.count({}).exec();
  const rng = Math.floor(Math.random() * count);
  const randomDoc = await User.find({}).limit(1).skip(rng).exec();
  return randomDoc[0];
}

export async function startRecommendationsGeneration(data) {
  await RecommendationService.deleteByUserId(data.user);
  return putRecord(process.env.KINESIS_RECOMMENDATIONS_STREAM_NAME, data.user, JSON.stringify(data));
}
