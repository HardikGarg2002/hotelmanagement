export interface IRoom {
	_id?: string;
	hotel_slug: string;
	number: number;
	type: RoomType;
	status: RoomStatus;
	price: number;
	amenities: string[];
	images: string[];
}

export enum RoomType {
	STANDARD,
	DELUXE,
	FAMILY_SUITE,
	BUSINESS_SUITE,
}

export enum RoomStatus {
	AVAILABLE,
	RESERVED,
	OCCUPIED,
	NOT_AVAILABLE,
}
