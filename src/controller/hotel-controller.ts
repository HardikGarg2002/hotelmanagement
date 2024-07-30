import { HotelService } from '../service/hotel-service';
import { IHotel } from '../interface/hotel';

export default class HotelController {
	private hotelService: HotelService;

	constructor() {
		this.hotelService = new HotelService();
	}

	public create = async (inputHotel: Partial<IHotel>): Promise<string> => {
		// Pass the validated data to the service layer
		return await this.hotelService.create(inputHotel);
	};

	public get = async (): Promise<IHotel[]> => {
		// Call the service layer to get the hotel
		return await this.hotelService.get();
	};

	public getById = async (id: string): Promise<IHotel> => {
		// Call the service layer to get the hotel
		return await this.hotelService.getById(id);
	};

	public patch = async (id: string, updatedHotelData: Partial<IHotel>): Promise<void> => {
		return await this.hotelService.patch(id, updatedHotelData);
	};

	public activate = async (id: string): Promise<void> => {
		return await this.hotelService.activate(id);
	};
}
