export interface IReservation {
	_id?: string;
	restuarant_slug: string;
	table_slug: string;
	user_id: string;
	date: Date;
	status: ReservationStatus;
	guest_count: number;
	check_in: Date;
}

export enum ReservationStatus {
	PENDING = 'PENDING',
	CONFIRMED = 'CONFIRMED',
	CANCELLED = 'CANCELLED',
	NO_SHOW = 'NO_SHOW',
	CHECKED_IN = 'CHECKED_IN',
	CHECKED_OUT = 'CHECKED_OUT',
}
