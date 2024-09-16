import { Request, Response, NextFunction } from 'express';
import TableController from '../controller/table-controller';

const tableController = new TableController();

export async function get(req: Request, res: Response, next: NextFunction) {
	try {
		const filters = req.query.filters as Record<string, any>;
		const table = await tableController.get(filters);
		res.json(table);
	} catch (error) {
		next(error);
	}
}

export async function getById(req: Request, res: Response, next: NextFunction) {
	try {
		const tableId = req.params.id;
		const table = await tableController.getById(tableId);
		res.json(table);
	} catch (error) {
		next(error);
	}
}

export async function create(req: Request, res: Response, next: NextFunction) {
	try {
		const inputTable = req.body;
		const createdTableId = await tableController.create(inputTable);
		res.status(201).json({ message: 'Table created successfully', id: createdTableId });
	} catch (error) {
		next(error);
	}
}

export async function patch(req: Request, res: Response, next: NextFunction) {
	try {
		const tableId = req.params.id;
		const updatedTableData = req.body;
		const updatedTable = await tableController.patch(tableId, updatedTableData);
		res.json('Table Updated successfully');
	} catch (error) {
		next(error);
	}
}

export async function activate(req: Request, res: Response, next: NextFunction) {
	try {
		const tableId = req.params.id;
		await tableController.activate(tableId);
		res.json('Table deleted successfully');
	} catch (error) {
		next(error);
	}
}

export async function getTableByRestaurantSlug(req: Request, res: Response, next: NextFunction) {
	try {
		const restaurantSlug = req.params.restaurant_slug;
		const table = await tableController.getTableByRestaurantSlug(restaurantSlug);
		res.json(table);
	} catch (error) {
		next(error);
	}
}
