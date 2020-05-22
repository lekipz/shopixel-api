export default class AlreadyRefillingError extends Error {
  constructor() {
    super('This product is already being refilled.');
    this.name = 'AlreadyRefillingError';
  }
}
