import JWT from 'jsonwebtoken';

export async function generate(email) {
  return JWT.sign({}, process.env.SHOPIXEL_JWT_SECRET, {
    subject: email,
    expiresIn: '3h'
  });
}
