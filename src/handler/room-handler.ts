import { Request, Response, NextFunction } from 'express';
import RoomController from '../controller/room-controller';

const roomController = new RoomController();

export async function get(req: Request, res: Response, next: NextFunction) {
	try {
		const filter = req.query.filters as Record<string, any>;
		const room = await roomController.get(filter);
		res.json(room);
	} catch (error) {
		next(error);
	}
}

export async function getById(req: Request, res: Response, next: NextFunction) {
	try {
		const roomId = req.params.id;
		const room = await roomController.getById(roomId);
		res.json(room);
	} catch (error) {
		next(error);
	}
}

export async function create(req: Request, res: Response, next: NextFunction) {
	try {
		const inputRoom = req.body;
		const createdRoom = await roomController.create(inputRoom);
		res.status(201).json(createdRoom);
	} catch (error) {
		next(error);
	}
}

export async function patch(req: Request, res: Response, next: NextFunction) {
	try {
		const roomId = req.params.id;
		const updatedRoomData = req.body;
		const updatedRoom = await roomController.patch(roomId, updatedRoomData);
		res.json('Room Updated successfully');
	} catch (error) {
		next(error);
	}
}

export async function activate(req: Request, res: Response, next: NextFunction) {
	try {
		const roomId = req.params.id;
		await roomController.activate(roomId);
		res.json('Room deleted successfully');
	} catch (error) {
		next(error);
	}
}
