import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {AuthRoutes} from './domains/auth/router';
import responseMiddleware from './lib/middlewares/response';
import morgan from 'morgan';
import {CustomerRoutes} from './domains/customer/router';
import {ProductRoutes} from './domains/product/router';
import {UserRoutes} from './domains/user/router';
import {TransactionRoutes} from "./domains/transaction/router";

const server = express();

server.use(morgan('tiny'));
server.use(cors());
server.use(bodyParser.json());

server.use(AuthRoutes);
server.use(CustomerRoutes);
server.use(ProductRoutes);
server.use(TransactionRoutes);
server.use(UserRoutes);

server.use(responseMiddleware);

export function startServer(port) {
  return new Promise(resolve => server.listen(port, resolve));
}
