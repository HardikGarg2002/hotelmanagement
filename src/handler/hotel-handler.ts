import { Request, Response, NextFunction } from 'express';
import HotelController from '../controller/hotel-controller';

const hotelController = new HotelController();

export async function get(req: Request, res: Response, next: NextFunction) {
	try {
		const hotel = await hotelController.get();
		res.json(hotel);
	} catch (error) {
		next(error);
	}
}

export async function getById(req: Request, res: Response, next: NextFunction) {
	try {
		const hotelId = req.params.id;
		const hotel = await hotelController.getById(hotelId);
		res.json(hotel);
	} catch (error) {
		next(error);
	}
}
export async function create(req: Request, res: Response, next: NextFunction) {
	try {
		const inputHotel = req.body;
		const createdHotel = await hotelController.create(inputHotel);
		res.status(201).json(createdHotel);
	} catch (error) {
		next(error);
	}
}
export async function patch(req: Request, res: Response, next: NextFunction) {
	try {
		const hotelId = req.params.id;
		const updatedHotelData = req.body;
		const updatedHotel = await hotelController.patch(hotelId, updatedHotelData);
		res.json('Hotel Updated successfully');
	} catch (error) {
		next(error);
	}
}
export async function activate(req: Request, res: Response, next: NextFunction) {
	try {
		const hotelId = req.params.id;
		await hotelController.activate(hotelId);
		res.json('Hotel deleted successfully');
	} catch (error) {
		next(error);
	}
}
