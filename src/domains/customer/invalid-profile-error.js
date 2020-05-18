export default class InvalidProfileError extends Error {
  constructor(profileName) {
    super(`Unknown profile : ${profileName}.`);
    this.name = 'InvalidProfileError'
  }
}
