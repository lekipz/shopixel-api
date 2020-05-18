import HttpResponse from './response';

export default class NoContent extends HttpResponse {
  constructor() {
    super(204);
  }
}
