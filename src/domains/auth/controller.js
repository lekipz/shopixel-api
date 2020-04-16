import * as UserService from '../user/service';
import * as AuthService from './service';
import Created from '../../lib/responses/statuses/created';
import BadRequest from '../../lib/responses/statuses/bad-request';
import Ok from '../../lib/responses/statuses/ok';

export async function register(body) {
  try {
    const user = await UserService.create(body);
    return new Created(user.toJSON());
  } catch (error) {
    if (error.name === 'ValidationError') {
      const {message, name} = error;
      return new BadRequest(name, message);
    }
    throw error;
  }
}

export async function login(body) {
  const {email = null, password = null} = body;

  try {
    const token = await AuthService.authenticate(email, password);
    return new Ok({token});
  } catch (error) {
    if (error.name === 'AuthenticationError') {
      return new BadRequest('invalid-credentials', 'Invalid email and/or password.');
    }
    throw error;
  }
}
