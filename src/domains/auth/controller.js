import * as UserService from '../user/service';
import Created from '../../lib/responses/created';
import BadRequest from '../../lib/responses/bad-request';
import InternalServerError from '../../lib/responses/server-error';

export async function register(body) {
  try {
    const user = await UserService.create(body);
    return new Created(user.toJSON());
  } catch (e) {
    if (e.name === 'ValidationError') {
      const {message, name} = e;
      return new BadRequest(name, message);
    }
    console.error(e);
    return new InternalServerError();
  }
}
