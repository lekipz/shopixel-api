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
