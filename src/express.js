import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {AuthRoutes} from './domains/auth/router';
import responseMiddleware from './lib/middlewares/response';

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.use(AuthRoutes);

server.use(responseMiddleware);

export function startServer(port) {
  return new Promise(resolve => server.listen(port, resolve));
}
