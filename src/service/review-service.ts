import { IReview } from '../interface/review';
import Review from '../model/review';

export class ReviewService {
	async getById(id: string): Promise<IReview> {
		const review = await Review.findById(id);
		if (!review) {
			throw new Error('Review not found');
		}
		return review;
	}

	async get(): Promise<IReview[]> {
		const reviews = await Review.find();
		return reviews;
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
