import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RecommendationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectID,
    ref: 'User',
    required: true
  },
  categories: [{
    type: Schema.Types.String
  }],
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }],
  generated: {
    type: Schema.Types.Boolean,
    defaultValue: false
  }
});

const Recommendation = mongoose.model('Recommendation', RecommendationSchema);

export default Recommendation;
