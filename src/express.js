import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {AuthRoutes} from './domains/auth/router';
import responseMiddleware from './lib/middlewares/response';
import morgan from 'morgan';
import {ProductRoutes} from './domains/product/router';

const server = express();

server.use(morgan('tiny'));
server.use(cors());
server.use(bodyParser.json());

server.use(AuthRoutes);
server.use(ProductRoutes);

server.use(responseMiddleware);

export function startServer(port) {
  return new Promise(resolve => server.listen(port, resolve));
}
