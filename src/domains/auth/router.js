import express from 'express';
import * as AuthController from './controller';
import handleRequest from '../../lib/response-wrapper';

const router = express.Router();

router.post('/register', handleRequest(({body}) => AuthController.register(body)));

export const AuthRoutes = router;
