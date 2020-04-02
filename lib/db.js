import mongoose from 'mongoose';
import ssmConfigClient from './ssm';

export const connectToDB = (() => {
  let connected = false;
  return async () => {
    if (!connected) {
      const dbUrl = await ssmConfigClient.getByKey('dbUrl', {withDecryption: true});
      await mongoose.connect(dbUrl, {
        useNewUrlParser: true
      });
      connected = true;
    }
  };
})();
