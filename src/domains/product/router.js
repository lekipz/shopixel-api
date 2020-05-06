import express from 'express';
import handleRequest from '../../lib/responses/response-wrapper';
import * as ProductController from './controller';

const router = express.Router();

router.get('/products', handleRequest(() => ProductController.findAll()));
router.get('/products/:name', handleRequest(({params: {name}}) => ProductController.findByName(name)));

export const ProductRoutes = router;
