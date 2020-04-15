import HttpResponse from './response';

export default class BadRequest extends HttpResponse {
  constructor(code, message) {
    super(400, {
      code,
      message
    });
  }
}
