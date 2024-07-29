import { IRoom, RoomType } from '../interface/room';
import mongoose, { Schema } from 'mongoose';

const RoomSchema = new Schema<IRoom>({
	hotel_slug: {
		type: String,
		required: true,
	},
	slug: {
		type: String,
		required: true,
		unique: true,
	},
	room_type: {
		type: String,
		enum: Object.values(RoomType),
	},

	price: {
		type: Number,
	},
	images: [
		{
			type: String,
		},
	],
});

const Room = mongoose.model<IRoom>('Room', RoomSchema);

export default Room;
