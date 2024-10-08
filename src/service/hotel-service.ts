import { buildQuery } from 'filter-library';
import { IHotel, IHotelMeta } from '../interface/hotel';
import Hotel from '../model/hotel'; // Assuming you have a Hotel model defined
import { IFilters } from '../interface/filters';

export class HotelService {
	async getById(id: string): Promise<IHotel> {
		const hotel = await Hotel.findById(id);
		if (!hotel) {
			throw new Error('Hotel not found');
		}
		return hotel;
	}

	async get(filters: IFilters): Promise<IHotelMeta> {
		const criteria = buildQuery(filters, ['status', 'title', 'slug']);
		const hotels = await Hotel.find(criteria);
		const total = hotels.length;
		return { data: hotels, meta: { total, currentPage: 1, totalPages: 0 } };
	}
	async create(data: any): Promise<string> {
		const hotel = new Hotel(data);
		const createdHotel = await hotel.save();
		return createdHotel.slug;
	}

	async patch(id: string, data: any): Promise<void> {
		await Hotel.findByIdAndUpdate(id, data, { new: true });
	}

	async activate(id: string): Promise<void> {
		await Hotel.findByIdAndDelete(id);
	}

	async isHotelNameUnique(name: string): Promise<boolean> {
		const existingHotel = await Hotel.findOne({ name });
		return !existingHotel;
	}

	async isHotelEmailUnique(email: string): Promise<boolean> {
		const existingHotel = await Hotel.findOne({ email });
		return !existingHotel;
	}

	// Add more validation methods for other unique entities if needed
}
