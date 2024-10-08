import mongoose, { Schema } from 'mongoose';
import { BookingStatus, IBooking } from '../interface/booking';

const BookingSchema = new Schema<IBooking>({
	user_id: { type: String },
	booking_date: {
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
	rooms: [
		{
			room_id: {
				type: String,
			},
			room_slug: {
				type: String,
			},
			room_type: {
				type: String,
			},
			room_price: {
				type: Number,
			},
			count: {
				type: Number,
			},
		},
	],
});

const Booking = mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;
