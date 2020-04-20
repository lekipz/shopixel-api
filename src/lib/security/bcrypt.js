import bcryptjs from 'bcryptjs';

const SALT_LENGTH = 10;

export async function hash(data) {
  return await new Promise((resolve, reject) => {
    bcryptjs.hash(data, SALT_LENGTH, (err, salt) => {
      if (err) {
        reject(err);
      } else {
        resolve(salt);
      }
    });
  });
}

export function verify(hashedData, data) {
  return bcryptjs.compare(data, hashedData);
}
