import express from 'express';
import * as CustomerController from './controller';
import handleRequest from '../../lib/responses/response-wrapper';

const router = express.Router();

router.get('/dummy', handleRequest(() => CustomerController.testGenerateProfile()));

export const CustomerRoutes = router;
