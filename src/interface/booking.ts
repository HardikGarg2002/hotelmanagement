import { ICustomer } from './customer';

export interface IBooking {
	_id?: string;
	room_slug: string;
	user_id: string;
	check_in: Date;
	check_out: Date;
	total_price: number;
	status: BookingStatus;
	guests: IGuest[];
	booking_date: Date;
}

export interface IGuest {
	name: string;
	age: number;
}

export enum BookingStatus {
	CONFIRMED,
	PENDING,
	CANCELLED,
	NO_SHOW,
	CHECKED_IN,
	CHECKED_OUT,
}
