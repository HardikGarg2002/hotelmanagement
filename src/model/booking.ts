import mongoose, { Schema } from 'mongoose';
import { BookingStatus, IBooking } from '../interface/booking';

const BookingSchema = new Schema<IBooking>({
	room_slug: {
		type: String,
		required: true,
	},
	user_id: { type: String },
	date: {
		type: Date,
		default: Date.now,
	},
	total_price: {
		type: Number,
	},
	status: {
		type: String,
		enum: Object.values(BookingStatus),
		default: BookingStatus.PENDING,
	},
	check_in: {
		type: Date,
	},
	check_out: {
		type: Date,
	},
	guests: [
		{
			name: {
				type: String,
			},
			age: {
				type: Number,
			},
		},
	],
});

const Booking = mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;
