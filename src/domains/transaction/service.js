import Transaction from './model';

export function create(body) {
  const transaction = new Transaction(body);
  return transaction.save();
}
