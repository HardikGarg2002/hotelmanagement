import { IContactInfo } from './hotel';

export interface IRestaturant {
	_id?: string;
	hotel_slug: string;
	title: string;
	restaurant_type: RestaurantType;
	// location: string; location will be the same as hotel_slug
	contact_info: IContactInfo;
	images: string[];
	opening_hours: string;
	menu: IMenuItem[]; // menu will be a separate collection
}

export enum RestaurantType {
	CAFE = 'CAFE',
	LOUNGE = 'LOUNGE',
	BAR = 'BAR',
	RESTAURANT = 'RESTAURANT',
}

export interface IMenuItem {
	title: string;
	price: number;
	description: string;
	images: string[];
}
