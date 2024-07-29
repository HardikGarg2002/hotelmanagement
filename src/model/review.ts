import { IReview, ReviewerType, ReviewFor } from '../interface/review';

import mongoose, { Schema } from 'mongoose';

const ReviewSchema = new Schema<IReview>({
	hotel_slug: {
		type: String,
		required: true,
	},
	user_id: String,

	rating: {
		type: Number,
		required: true,
	},
	title: {
		type: String,
	},
	detail: {
		type: String,
	},
	date: {
		type: Date,
	},
	reviewer: {
		type: String,
		enum: Object.values(ReviewerType),
	},
	review_for: {
		type: String,
		enum: Object.values(ReviewFor),
	},
});

const Review = mongoose.model<IReview>('Review', ReviewSchema);

export default Review;
