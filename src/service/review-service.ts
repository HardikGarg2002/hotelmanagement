import { IReview, IReviewMeta } from '../interface/review';
import Review from '../model/review';
import { IFilters } from '../interface/filters';

export class ReviewService {
	async getById(id: string): Promise<IReview> {
		const review = await Review.findById(id);
		if (!review) {
			throw new Error('Review not found');
		}
		return review;
	}

	async get(): Promise<IReviewMeta> {
		const reviews = await Review.find();
		const total = reviews.length;
		return { data: reviews, meta: { total } };
	}
	async create(data: any): Promise<string> {
		const review = new Review(data);
		const createdReview = await review.save();
		return createdReview._id;
	}

	async patch(id: string, data: any): Promise<void> {
		await Review.findByIdAndUpdate(id, data, { new: true });
	}

	async activate(id: string): Promise<void> {
		await Review.findByIdAndDelete(id);
	}
}
