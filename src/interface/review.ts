export interface IReview {
	_id?: string;
	user_id: string;
	hotel_slug: string;
	rating: number;
	title: string;
	detail: string;
	date: Date;
	reviewer: ReviewerType;
	review_for: ReviewFor;
}

export enum ReviewerType {
	COUPLE = 'COUPLE',
	FAMILY = 'FAMILY',
	SOLO = 'SOLO',
	BUSINESS = 'BUSINESS',
	FRIENDS = 'FRIENDS',
	GROUP = 'GROUP',
}

export enum ReviewFor {
	HOTEL = 'HOTEL',
	ROOM = 'ROOM',
	RESTAURANT = 'RESTAURANT',
}

export interface IReviewMeta {
	data: IReview[];
	meta: {
		total: number;
	};
}
