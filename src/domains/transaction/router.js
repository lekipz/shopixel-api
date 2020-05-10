import express from 'express';
import handleRequest from '../../lib/responses/response-wrapper';
import * as TransactionController from './controller'

const router = express.Router();

router.post('/transactions', handleRequest(({body}) => {TransactionController.create(body)}));

export const TransactionRoutes = router;
