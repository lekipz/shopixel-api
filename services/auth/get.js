import {ok} from '../../lib/responses';
import ssmConfigClient from '../../lib/ssm';

export async function handler(event, context) {
  const dbUrl = await ssmConfigClient.getByKey('mongoUrl', {withDecryption: true});
  return ok({message: 'Hello world !'});
}
