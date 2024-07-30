import { Request, Response, NextFunction } from 'express';
import RestaurantController from '../controller/restaurant-controller';

const restaurantController = new RestaurantController();

export async function get(req: Request, res: Response, next: NextFunction) {
	try {
		const restaurant = await restaurantController.get();
		res.json(restaurant);
	} catch (error) {
		next(error);
	}
}

export async function getById(req: Request, res: Response, next: NextFunction) {
	try {
		const restaurantId = req.params.id;
		const restaurant = await restaurantController.getById(restaurantId);
		res.json(restaurant);
	} catch (error) {
		next(error);
	}
}
export async function create(req: Request, res: Response, next: NextFunction) {
	try {
		const inputRestaurant = req.body;
		const createdRestaurant = await restaurantController.create(inputRestaurant);
		res.status(201).json(createdRestaurant);
	} catch (error) {
		next(error);
	}
}
export async function patch(req: Request, res: Response, next: NextFunction) {
	try {
		const restaurantId = req.params.id;
		const updatedRestaurantData = req.body;
		const updatedRestaurant = await restaurantController.patch(restaurantId, updatedRestaurantData);
		res.json('Restaurant Updated successfully');
	} catch (error) {
		next(error);
	}
}
export async function activate(req: Request, res: Response, next: NextFunction) {
	try {
		const restaurantId = req.params.id;
		await restaurantController.activate(restaurantId);
		res.json('Restaurant deleted successfully');
	} catch (error) {
		next(error);
	}
}
