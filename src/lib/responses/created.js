import HttpResponse from './response';

export default class Created extends HttpResponse {
  constructor(body) {
    super(201, body);
  }
}
