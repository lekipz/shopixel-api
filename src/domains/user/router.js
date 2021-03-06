import express from 'express';
import handleRequest from '../../lib/responses/response-wrapper';
import * as UserController from './controller';

const router = express.Router();

router.get('/users/random', handleRequest(() => UserController.findRandomUser()));
router.get('/users/:id/recommendations', handleRequest(({params: {id}}) => UserController.getRecommendationsForUser(id)));

router.post('/users/:id/recommendations', handleRequest(({body, params: {id}}) => UserController.createRecommendationsForUser(id, body)));

export const UserRoutes = router;
