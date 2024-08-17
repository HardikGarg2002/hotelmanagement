import { ReviewService } from '../service/review-service';
import { IReview, IReviewMeta } from '../interface/review.js';

export default class ReviewController {
	private reviewService: ReviewService;

	constructor() {
		this.reviewService = new ReviewService();
	}

	public create = async (inputReview: Partial<IReview>): Promise<string> => {
		// Pass the validated data to the service layer
		return await this.reviewService.create(inputReview);
	};

	public get = async (): Promise<IReviewMeta> => {
		// Call the service layer to get the review
		return await this.reviewService.get();
	};

	public getById = async (id: string): Promise<IReview> => {
		// Call the service layer to get the review
		return await this.reviewService.getById(id);
	};

	public patch = async (id: string, updatedReviewData: Partial<IReview>): Promise<void> => {
		return await this.reviewService.patch(id, updatedReviewData);
	};

	public activate = async (id: string): Promise<void> => {
		return await this.reviewService.activate(id);
	};
}
