import HttpResponse from './response';

export default class Ok extends HttpResponse {
  constructor(body) {
    super(200, body);
  }
}
