import JWT from 'jsonwebtoken';

export async function generate(email) {
  return new Promise((resolve, reject) => {
    JWT.sign({}, process.env.SHOPIXEL_JWT_SECRET, {
      subject: email,
      expiresIn: '3h'
    }, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
}

export async function verify(token) {
  return new Promise(resolve => {
    JWT.verify(token, process.env.SHOPIXEL_JWT_SECRET, {}, err => {
      resolve(!err);
    });
  });
}
