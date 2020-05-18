import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;
const Types = Schema.Types;

const ProductSchema = new Schema({
  name: {
    type: Types.String,
    required: true,
    unique: true
  },
  category: {
    type: Types.String,
    required: true
  },
  currentStock: {
    type: Types.Number,
    defaultValue: 0,
    min: 0
  },
  maxStock: {
    type: Types.Number,
    required: true,
    min: 1
  }
});

ProductSchema.plugin(uniqueValidator);

const Product = mongoose.model('Product', ProductSchema);

export default Product;
