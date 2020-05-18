import express from 'express';
import handleRequest from '../../lib/responses/response-wrapper';
import * as UserController from './controller';

const router = express.Router();

router.get('/users/random', handleRequest(() => UserController.findRandomUser()));

export const UserRoutes = router;
