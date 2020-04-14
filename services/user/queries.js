import User from './UserModel';
import {hash} from '../../lib/bcrypt';

export async function create(body) {
  const user = new User(body);
  await user.save();
  const hashedPassword = await hash(user.password, 10);
  user.set('password', hashedPassword);
  return await user.save();
}
