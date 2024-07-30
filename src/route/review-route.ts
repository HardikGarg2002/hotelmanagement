import express from 'express';
import * as reviewHandler from '../handler/review-handler';

const router = express.Router();

// GET /reviews
router.get('/', reviewHandler.get);

// POST /reviews
router.post('/', reviewHandler.create);

// PUT /reviews/:id
router.patch('/:id', reviewHandler.patch);

// DELETE /reviews/:id
router.delete('/:id', reviewHandler.activate);

export default router;
