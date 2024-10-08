import { IMetaData } from './metaData';

export interface IBooking {
	_id?: string;
	user_id: string;
	booking_date: Date;
	check_in: Date;
	check_out: Date;
	total_price: number;
	status: BookingStatus;
	guests: IGuest[];
	rooms: {
		room_id: string;
		room_slug: string;
		room_type: string;
		room_price: number;
		count: number;
	}[];
}

export interface IGuest {
	name: string;
	age: number;
}

export enum BookingStatus {
	CONFIRMED = 'CONFIRMED',
	PENDING = 'PENDING',
	CANCELLED = 'CANCELLED',
	NO_SHOW = 'NO_SHOW',
	CHECKED_IN = 'CHECKED_IN',
	CHECKED_OUT = 'CHECKED_OUT',
}

export interface IBookingMeta {
	data: IBooking[];
	meta: IMetaData;
}
