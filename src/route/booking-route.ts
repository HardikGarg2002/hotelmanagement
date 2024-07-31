import express from 'express';
import * as bookingHandler from '../handler/booking-handler';
const router = express.Router();

// GET /bookings
router.get('/', bookingHandler.get);

// GET /bookings/:id
router.get('/:id', bookingHandler.getById);

// POST /bookings
router.post('/', bookingHandler.create);

// PUT /bookings/:id
router.patch('/:id', bookingHandler.patch);

// activate or deactivate /bookings/:id

router.delete('/:id', bookingHandler.cancel);

export default router;
