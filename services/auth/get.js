import {ok} from '../../lib/responses';
import {connectToDB} from '../../lib/db';

export async function handler(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectToDB();

  return ok({message: 'Hello world !'});
}
