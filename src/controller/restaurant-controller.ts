import { RestaurantService } from '../service/restaurant-service.js';
import { IRestaurant } from '../interface/restaurant.js';

export default class RestaurantController {
	private restaurantService: RestaurantService;

	constructor() {
		this.restaurantService = new RestaurantService();
	}

	public create = async (inputRestaurant: Partial<IRestaurant>): Promise<string> => {
		// Pass the validated data to the service layer
		return await this.restaurantService.create(inputRestaurant);
	};

	public get = async (): Promise<IRestaurant[]> => {
		// Call the service layer to get the restaurant
		return await this.restaurantService.get();
	};

	public getById = async (id: string): Promise<IRestaurant> => {
		// Call the service layer to get the restaurant
		return await this.restaurantService.getById(id);
	};

	public patch = async (id: string, updatedRestaurantData: Partial<IRestaurant>): Promise<void> => {
		return await this.restaurantService.patch(id, updatedRestaurantData);
	};

	public activate = async (id: string): Promise<void> => {
		return await this.restaurantService.activate(id);
	};
}
