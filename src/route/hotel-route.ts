import express, { Request, Response } from 'express';
import * as hotelHandler from '../handler/hotel-handler';
const router = express.Router();

// GET /hotels
router.get('/', hotelHandler.get);

// POST /hotels
router.post('/', hotelHandler.create);

// PUT /hotels/:id
router.put('/:id', hotelHandler.patch);

// activate or deactivate /hotels/:id
router.delete('/:id', hotelHandler.activate);

export default router;
