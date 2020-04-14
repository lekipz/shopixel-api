import bcryptjs from 'bcryptjs';

export async function hash(data, rounds) {
  const salt = await new Promise((resolve, reject) => {
    bcryptjs.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
      } else {
        resolve(salt);
      }
    });
  });

  return await new Promise((resolve, reject) => {
    bcryptjs.hash(data, salt, (err, salt) => {
      if (err) {
        reject(err);
      } else {
        resolve(salt);
      }
    });
  });
}
