import Transaction from './model';

export async function create(body) {
  const transaction = new Transaction(body);
  console.log(transaction);
  return await transaction.save();
}
