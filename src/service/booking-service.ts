import { IBooking } from '../interface/booking';
import Booking from '../model/booking';

export class BookingService {
	public create = async (inputBooking: Partial<IBooking>): Promise<string> => {
		const booking = new Booking(inputBooking);
		await booking.save();
		return booking._id;
	};

	public get = async (): Promise<IBookingMeta> => {
		const booking = await Booking.find();
		const total = booking.length;
		return { data: booking, meta: { total } };
	};

	public getById = async (id: string): Promise<IBooking> => {
		const booking = await Booking.findById(id);
		if (!booking) {
			throw new Error('Booking not found');
		}
		return booking;
	};

	public patch = async (id: string, updatedBookingData: Partial<IBooking>): Promise<void> => {
		await Booking.findByIdAndUpdate(id, updatedBookingData);
	};

	public cancel = async (id: string): Promise<void> => {
		await Booking.findByIdAndDelete(id);
	};
}
