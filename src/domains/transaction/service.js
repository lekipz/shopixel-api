import Transaction from './model';

export async function create(body) {
  const transaction = new Transaction(body);
  return await transaction.save();
}
