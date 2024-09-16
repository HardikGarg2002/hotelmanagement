import { Request, Response, NextFunction } from 'express';
import BookingController from '../controller/booking-controller';

const bookingController = new BookingController();

export async function get(req: Request, res: Response, next: NextFunction) {
	try {
		const filters = req.query.filters as Record<string, any>;
		const booking = await bookingController.get(filters);
		res.json(booking);
	} catch (error) {
		next(error);
	}
}

export async function getById(req: Request, res: Response, next: NextFunction) {
	try {
		const bookingId = req.params.id;
		const booking = await bookingController.getById(bookingId);
		res.json(booking);
	} catch (error) {
		next(error);
	}
}

export async function create(req: Request, res: Response, next: NextFunction) {
	try {
		const inputBooking = req.body;
		const createdBooking = await bookingController.create(inputBooking);
		res.status(201).json(createdBooking);
	} catch (error) {
		next(error);
	}
}

export async function patch(req: Request, res: Response, next: NextFunction) {
	try {
		const bookingId = req.params.id;
		const updatedBookingData = req.body;
		const updatedBooking = await bookingController.patch(bookingId, updatedBookingData);
		res.json('Booking Updated successfully');
	} catch (error) {
		next(error);
	}
}

export async function cancel(req: Request, res: Response, next: NextFunction) {
	try {
		const bookingId = req.params.id;
		await bookingController.cancel(bookingId);
		res.json('Booking deleted successfully');
	} catch (error) {
		next(error);
	}
}
