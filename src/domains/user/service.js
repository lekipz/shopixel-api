import User from './model';
import {hash} from '../../lib/security/bcrypt';

export async function create(body) {
  const user = new User(body);
  await user.save();
  const hashedPassword = await hash(user.password);
  user.set('password', hashedPassword);
  return await user.save();
}
