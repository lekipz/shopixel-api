import Unauthorized from '../responses/statuses/unauthorized';
import * as JWT from '../security/jwt'

const AUTH_HEADER_NAME = 'Authorization';
const AUTH_HEADER_PREFIX = 'Bearer ';

export default function authorized() {
  return async (req, res, next) => {
    const authHeader = req.header(AUTH_HEADER_NAME);
    if (!authHeader || !authHeader.includes(AUTH_HEADER_PREFIX)) {
      return next(new Unauthorized());
    }

    const token = authHeader.replace(AUTH_HEADER_PREFIX, '');
    const isValid = await JWT.verify(token);
    if (!isValid) {
      return next(new Unauthorized());
    }
    next();
  };
}
