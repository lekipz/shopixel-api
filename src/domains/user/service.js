import User from './model';
import {hash} from '../../lib/security/bcrypt';
import {getRandomProfile} from '../customer/service';

export async function create(body) {
  const user = new User(body);
  await user.save();

  const hashedPassword = await hash(user.password);
  user.set('password', hashedPassword);

  const profile = await getRandomProfile();
  user.set('profile', profile.profile);

  return await user.save();
}
