import { Filters } from 'filter-library';
import IRoomMeta, { IRoom } from '../interface/room';
import { RoomService } from '../service/room-service';

export default class RoomController {
	private roomService: RoomService;

	constructor() {
		this.roomService = new RoomService();
	}

	public create = async (inputRoom: Partial<IRoom>): Promise<string> => {
		// Pass the validated data to the service layer
		return await this.roomService.create(inputRoom);
	};

	public get = async (filters: IFilters): Promise<IRoomMeta> => {
		// Call the service layer to get the room
		return await this.roomService.get(filters);
	};

	public getById = async (id: string): Promise<IRoom> => {
		// Call the service layer to get the room
		return await this.roomService.getById(id);
	};

	public patch = async (id: string, updatedRoomData: Partial<IRoom>): Promise<void> => {
		return await this.roomService.patch(id, updatedRoomData);
	};

	public activate = async (id: string): Promise<void> => {
		return await this.roomService.activate(id);
	};
}
