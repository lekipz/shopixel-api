const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
};

function buildResponse(statusCode, body, headers) {
  return {
    statusCode,
    headers: {
      ...CORS_HEADERS,
      ...headers
    },
    body: JSON.stringify(body)
  };
}

// 2XX

export function ok(body) {
  return buildResponse(200, body, {});
}

export function created(body) {
  return buildResponse(201, body, {});
}

// 4XX

export function badRequest(code, message) {
  return buildResponse(400, {code, message}, {});
}

// 5XX

export function internalServerError() {
  return buildResponse(500, {
    message: 'An unexpected error occurred. Please retry later. If the problem persists, please contact an administrator.'
  }, {});
}
