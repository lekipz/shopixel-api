import HttpResponse from '../responses/response';
import InternalServerError from '../responses/server-error';

export default function responseMiddleware(err, req, res, next) {
  if (err instanceof HttpResponse) {
    res.status(err.status);
    if (err.status === 204) {
      return res.end();
    } else {
      return res.json(err.body);
    }
  } else {
    return responseMiddleware(new InternalServerError(), req, res, next);
  }
}