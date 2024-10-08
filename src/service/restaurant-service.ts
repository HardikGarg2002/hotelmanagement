import { buildQuery } from 'filter-library';
import { IRestaurant, IRestaurantMeta } from '../interface/restaurant';
import Restaurant from '../model/restaurant';
import { IFilters } from '../interface/filters';

export class RestaurantService {
	async getById(id: string): Promise<IRestaurant> {
		const restaurant = await Restaurant.findById(id);
		if (!restaurant) {
			throw new Error('Restaurant not found');
		}
		return restaurant;
	}

	async get(filters: IFilters): Promise<IRestaurantMeta> {
		const criteria = buildQuery(filters, ['title', 'slug', 'restaurant_type', 'hotel_slug']);
		const restaurants = await Restaurant.find(criteria);
		const total = restaurants.length;
		return { data: restaurants, meta: { total } };
	}
	async create(data: any): Promise<string> {
		const restaurant = new Restaurant(data);
		const createdRestaurant = await restaurant.save();
		return createdRestaurant.slug;
	}

	async patch(id: string, data: any): Promise<void> {
		await Restaurant.findByIdAndUpdate(id, data, { new: true });
	}

	async activate(id: string): Promise<void> {
		await Restaurant.findByIdAndDelete(id);
	}
}
