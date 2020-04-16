import HttpResponse from './response';

export default class InternalServerError extends HttpResponse {
  constructor() {
    super(500, {
      code: 'server-error',
      message: 'An unexpected error occurred. Please retry later. If the problem persists, please contact an administrator.'
    });
  }
}
