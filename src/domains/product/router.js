import express from 'express';
import handleRequest from '../../lib/responses/response-wrapper';
import * as ProductController from './controller';

const router = express.Router();

router.get('/products', handleRequest(() => ProductController.findAll()));
router.get('/products/:name', handleRequest(({params: {name}}) => ProductController.findByName(name)));

router.put('/products/:name/purchase', handleRequest( ({params: {name}}) => ProductController.purchaseProduct(name)));

export const ProductRoutes = router;
