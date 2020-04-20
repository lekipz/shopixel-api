export default function handleRequest(controllerFunction) {
  return (req, res, next) => {
    const result = controllerFunction(req);
    if (result instanceof Promise) {
      return result.then(data => next(data));
    } else {
      return next(result);
    }
  };
}
