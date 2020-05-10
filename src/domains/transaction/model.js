import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;
const Types = Schema.Types;

const TransactionSchema = new Schema({
  id: {
    type: Types.Decimal,
    required: true,
    unique: true
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }],
  user: {
    type: Schema.Types.ObjectID,
    ref: 'User',
    required: true
  }
});

TransactionSchema.plugin(uniqueValidator);

const Transaction = mongoose.model('Transaction', TransactionSchema);

export default Transaction;
