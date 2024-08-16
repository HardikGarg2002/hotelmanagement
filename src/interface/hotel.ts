// https://github.com/tssovi/grokking-the-object-oriented-design-interview/blob/master/object-oriented-design-case-studies/design-a-hotel-management-system.md

import { ICustomer } from './customer';

// This hotel will also work as restaurant. So, we can book a table in the hotel.
export interface IHotel {
	_id?: string;
	slug: string;
	title: string;
	desc: string;
	address: IAddress;
	contact_info: IContactInfo;
	website: string;
	associated_branches: IHotel['slug'][]; // slug
	images: string[];
	amenities: string[];
}
export interface IHotelMeta {
	data: IHotel[];
	meta: {
		total: number;
	};
}
export interface IAddress {
	street: string;
	city: string;
	state: string;
	zip: string;
	country: string;
}

export interface IContactInfo {
	phone: string;
	email: string;
}

export interface Reservation {
	res_no: number;
	customer: ICustomer;
	// room: IRoom;
	checkInDate: Date;
	checkOutDate: Date;
}
