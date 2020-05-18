import * as UserService from './service';
import Ok from '../../lib/responses/statuses/ok';
import NoContent from '../../lib/responses/statuses/no-content';

export async function findRandomUser() {
  const randomUser = await UserService.findRandomUser();
  if (randomUser) {
    return new Ok(randomUser);
  }
  return new NoContent();
}
