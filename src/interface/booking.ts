import { ICustomer } from './customer';

export interface IBooking {
	_id?: string;
	room_id: string;
	customer: ICustomer;
	check_in_date: Date;
	check_out_date: Date;
	total_price: number;
	status: BookingStatus;
}

export enum BookingStatus {
	CONFIRMED,
	PENDING,
	CANCELLED,
	NO_SHOW,
	CHECKED_IN,
	CHECKED_OUT,
}
