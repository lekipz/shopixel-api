import HttpResponse from './response';

export default class Unauthorized extends HttpResponse {
  constructor() {
    super(401, {
      code: 'unauthorized',
      message: 'You are not authenticated and therefore not allowed to perform this operation.'
    });
  }
}
