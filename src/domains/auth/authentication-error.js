export default class AuthenticationError extends Error {
  constructor() {
    super('Invalid email and/or password.');
    this.name = 'AuthenticationError'
  }
}
