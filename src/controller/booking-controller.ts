import { BookingService } from '../service/booking-service';
import { IBooking, IBookingMeta } from '../interface/booking';
import { IFilters } from '../interface/filters';

export default class BookingController {
	private bookingService: BookingService;

	constructor() {
		this.bookingService = new BookingService();
	}

	public create = async (inputBooking: Partial<IBooking>): Promise<string> => {
		// Pass the validated data to the service layer
		return await this.bookingService.create(inputBooking);
	};

	public get = async (filters: IFilters): Promise<IBookingMeta> => {
		// Call the service layer to get the booking
		return await this.bookingService.get(filters);
	};

	public getById = async (id: string): Promise<IBooking> => {
		// Call the service layer to get the booking
		return await this.bookingService.getById(id);
	};

	public patch = async (id: string, updatedBookingData: Partial<IBooking>): Promise<void> => {
		return await this.bookingService.patch(id, updatedBookingData);
	};

	public cancel = async (id: string): Promise<void> => {
		return await this.bookingService.cancel(id);
	};
}
