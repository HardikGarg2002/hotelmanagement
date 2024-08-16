export interface IBooking {
	_id?: string;
	room_slug: string;
	user_id: string;
	date: Date;
	check_in: Date;
	check_out: Date;
	total_price: number;
	status: BookingStatus;
	guests: IGuest[];
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
	meta: {
		total: number;
	};
}
