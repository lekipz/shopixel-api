import HttpResponse from './response';

export default class NotFound extends HttpResponse {
  constructor(message) {
    super(404, {
      code: 'not-found',
      message
    });
  }
}
