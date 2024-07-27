import { IContactInfo } from './hotel';

export interface IRestaturant {
	_id?: string;
	hotel_slug: string;
	name: string;
	type: RestaurantType;
	// location: string; location will be the same as hotel_slug
	contact_info: IContactInfo;
	images: string[];
	menu: IMenu; // menu will be a separate collection
}

export enum RestaurantType {
	BAR,
	CAFE,
	RESTAURANT,
	PUB,
	LOUNGE,
}

export interface IMenu {
	_id?: string;
	restaurant_slug: string;
	items: IMenuItem[];
}

export interface IMenuItem {
	name: string;
	price: number;
	description: string;
	images: string[];
}
