import { buildQuery, Filters } from 'filter-library';
import IRoomMeta, { IRoom } from '../interface/room';
import Room from '../model/room';

export class RoomService {
	async getById(id: string): Promise<IRoom> {
		const room = await Room.findById(id);
		if (!room) {
			throw new Error('Room not found');
		}
		return room;
	}

	async get(filters: Filters): Promise<IRoomMeta> {
		const criteria = buildQuery(filters, ['status', 'slug']);
		const rooms = await Room.find(criteria);
		const total = rooms.length;
		return { data: rooms, meta: { total } };
	}

	async create(data: any): Promise<string> {
		const room = new Room(data);
		const createdRoom = await room.save();
		return createdRoom.slug;
	}

	async patch(id: string, data: any): Promise<void> {
		await Room.findByIdAndUpdate(id, data);
	}

	async activate(id: string): Promise<void> {
		await Room.findByIdAndDelete(id);
	}
}
