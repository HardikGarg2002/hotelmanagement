export interface IRoom {
	_id?: string;
	slug: string;
	hotel_slug: string;
	room_type: RoomType;
	status: RoomStatus;
	price: number;
	amenities: string[];
	images: string[];
}

export enum RoomType {
	STANDARD = 'Standard',
	DELUXE = 'Deluxe',
	FAMILY_SUITE = 'Family Suite',
	BUSINESS_SUITE = 'Business Suite',
}

export enum RoomStatus {
	AVAILABLE = 'AVAILABLE',
	RESERVED = 'RESERVED',
	OCCUPIED = 'OCCUPIED',
	NOT_AVAILABLE = 'NOT_AVAILABLE',
}
