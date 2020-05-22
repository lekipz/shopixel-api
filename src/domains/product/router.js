import express from 'express';
import handleRequest from '../../lib/responses/response-wrapper';
import * as ProductController from './controller';

const router = express.Router();

router.get('/products', handleRequest(() => ProductController.findAll()));
router.get('/products/shopping-list', handleRequest(({query: {profile = null}}) => ProductController.generateShoppingList(profile)))
router.get('/products/:name', handleRequest(({params: {name}}) => ProductController.findByName(name)));

router.put('/products/:name/purchase', handleRequest( ({params: {name}}) => ProductController.purchaseProduct(name)));
router.put('/products/:name/refill', handleRequest(({params: {name}}) => ProductController.refillProductStock(name)));

export const ProductRoutes = router;
