import mongoose, { Schema } from 'mongoose';
import { IBooking } from '../interface/booking';

const BookingSchema = new Schema<IBooking>({
	room_slug: {
		type: String,
		required: true,
	},
	user_id: { type: String },
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
	booking_date: {
		type: Date,
	},
	total_price: {
		type: Number,
	},
});

const Booking = mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;
