import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RecommendationSchema = new Schema({
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

const Recommendation = mongoose.model('Recommendation', RecommendationSchema);

export default Recommendation;
