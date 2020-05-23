import HttpResponse from '../responses/statuses/response';
import InternalServerError from '../responses/statuses/server-error';

export default function responseMiddleware(err, req, res, next) {
  if (err instanceof HttpResponse) {
    res.status(err.status);

    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);

    if (err.status === 204) {
      return res.end();
    } else {
      return res.json(err.body);
    }
  } else {
    console.error(err);
    return responseMiddleware(new InternalServerError(), req, res, next);
  }
}
