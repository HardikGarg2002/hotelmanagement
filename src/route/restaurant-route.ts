import express from 'express';
import * as restaurantHandler from '../handler/restaurant-handler';
const router = express.Router();

// GET /restaurants
router.get('/', restaurantHandler.get);

// POST /restaurants
router.post('/', restaurantHandler.create);

// PUT /restaurants/:id
router.patch('/:id', restaurantHandler.patch);

// activate or deactivate /restaurants/:id
router.delete('/:id', restaurantHandler.activate);

export default router;
