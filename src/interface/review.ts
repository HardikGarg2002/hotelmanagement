export interface IReview {
	_id?: string;
	hotel_slug: string;
	rating: number;
	title: string;
	detail: string;
	date: Date;
	reviewer: ReviewerType;
	review_for: ReviewFor;
}

export enum ReviewerType {
	COUPLE,
	FAMILY,
	SOLO,
	BUSINESS,
	FRIENDS,
	GROUP,
}

export enum ReviewFor {
	HOTEL,
	ROOM,
	RESTAURANT,
}
