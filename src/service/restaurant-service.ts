import { IRestaurant, IRestaurantMeta } from '../interface/restaurant';
import Restaurant from '../model/restaurant';

export class RestaurantService {
	async getById(id: string): Promise<IRestaurant> {
		const restaurant = await Restaurant.findById(id);
		if (!restaurant) {
			throw new Error('Restaurant not found');
		}
		return restaurant;
	}

	async get(): Promise<IRestaurantMeta> {
		const restaurants = await Restaurant.find();
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
