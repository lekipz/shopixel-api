import {ok} from '../../lib/responses';

export async function handler(event, context) {
  return ok({message: 'Hello world !'});
}
