import { IRoom, RoomStatus, RoomType } from '../interface/room';
import mongoose, { Schema } from 'mongoose';

const RoomSchema = new Schema<IRoom>({
	slug: {
		type: String,
		required: true,
		unique: true,
	},
	hotel_slug: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		enum: RoomStatus,
		default: RoomStatus.AVAILABLE,
	},
	room_type: {
		type: String,
		enum: Object.values(RoomType),
		default: RoomType.STANDARD,
	},
	price: {
		type: Number,
	},
	amenities: [
		{
			type: String,
		},
	],
	images: [
		{
			type: String,
		},
	],
});

const Room = mongoose.model<IRoom>('Room', RoomSchema);

export default Room;
