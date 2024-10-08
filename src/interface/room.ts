import { IMetaData } from './metaData';

export interface IRoom {
	_id?: string;
	slug: string;
	hotel_slug: string;
	room_type: RoomType;
	max_allowed_person: number;
	status: RoomStatus;
	// room_count: number;
	// booked_count: number;
	price: number;
	amenities: string[];
	images: string[];
}

export enum RoomType {
	STANDARD = 'Standard',
	DELUXE = 'Deluxe',
	FAMILY_SUITE = 'Family Suite',
	BUSINESS_SUITE = 'Business Suite',
	OTHER = 'OTHER',
}

export enum RoomStatus {
	AVAILABLE = 'AVAILABLE',
	RESERVED = 'RESERVED',
	OCCUPIED = 'OCCUPIED',
	IN_SERVICE = 'IN-SERVICE',
	NOT_AVAILABLE = 'NOT_AVAILABLE',
}

export default interface IRoomMeta {
	data: IRoom[];
	meta: IMetaData;
}
