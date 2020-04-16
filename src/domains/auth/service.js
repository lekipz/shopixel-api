import User from '../user/model';
import * as bcrypt from '../../lib/security/bcrypt';
import * as JWT from '../../lib/security/jwt';
import AuthenticationError from './authentication-error';

export async function authenticate(email, password) {
  const dbUser = await User.findOne({email}).exec();

  if (!dbUser) {
    throw new AuthenticationError();
  }

  const passwordCheck = await bcrypt.verify(dbUser.password, password);
  if (!passwordCheck) {
    throw new AuthenticationError();
  }

  return JWT.generate(email);
}
