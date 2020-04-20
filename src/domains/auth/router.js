import express from 'express';
import * as AuthController from './controller';
import handleRequest from '../../lib/responses/response-wrapper';

const router = express.Router();

router.post('/register', handleRequest(({body}) => AuthController.register(body)));
router.post('/login', handleRequest(({body}) => AuthController.login(body)));

export const AuthRoutes = router;
