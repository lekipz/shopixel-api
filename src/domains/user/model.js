import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;
const Types = Schema.Types;

const UserSchema = new Schema({
  firstName: {
    type: Types.String,
    required: true
  },
  lastName: {
    type: Types.String,
    required: true
  },
  email: {
    type: Types.String,
    required: true,
    unique: true
  },
  password: {
    type: Types.String,
    required: true
  },
  profile: {
    type: Types.String
  }
});

UserSchema.plugin(uniqueValidator);

const User = mongoose.model('User', UserSchema);

export default User;
