import mongoose from 'mongoose';

export async function connectToDB(url) {
  return await mongoose.connect(url, {
    useNewUrlParser: true
  });
}
