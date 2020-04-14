import {connectToDB} from '../../lib/db';
import {badRequest, internalServerError, created} from '../../lib/responses';
import * as userQueries from '../user/queries';

export async function handler(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectToDB();

  try {
    const body = JSON.parse(event.body);
    const user = await userQueries.create(body);
    return created(user.toJSON());
  } catch (e) {
    if (e.name === 'ValidationError') {
      const {message, name} = e;
      return badRequest(name, message);
    }
    console.error(e);
    return internalServerError();
  }
}
