import * as CustomerService from './service';
import Ok from '../../lib/responses/statuses/ok';

export async function testGenerateProfile() {
  const profile = await CustomerService.getRandomProfile();
  return new Ok(profile);
}
