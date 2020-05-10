import * as TransactionService from './service';
import Created from '../../lib/responses/statuses/created';
import BadRequest from '../../lib/responses/statuses/bad-request';

export async function create(body) {
  try {
    const transaction = await TransactionService.create(body);
    const jsonTransaction = transaction.toJson();

    return new Created(jsonTransaction);
  }catch (error) {
    if(error.name === 'ValidationError') {
      const {message, name} = error;
      return new BadRequest(name, message);
    }
    throw error
  }
}

