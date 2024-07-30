import { Request, Response, NextFunction } from 'express';
import ReviewController from '../controller/review-controller';

const reviewController = new ReviewController();

export async function get(req: Request, res: Response, next: NextFunction) {
	try {
		const review = await reviewController.get();
		res.json(review);
	} catch (error) {
		next(error);
	}
}

export async function getById(req: Request, res: Response, next: NextFunction) {
	try {
		const reviewId = req.params.id;
		const review = await reviewController.getById(reviewId);
		res.json(review);
	} catch (error) {
		next(error);
	}
}
export async function create(req: Request, res: Response, next: NextFunction) {
	try {
		const inputReview = req.body;
		const createdReview = await reviewController.create(inputReview);
		res.status(201).json(createdReview);
	} catch (error) {
		next(error);
	}
}
export async function patch(req: Request, res: Response, next: NextFunction) {
	try {
		const reviewId = req.params.id;
		const updatedReviewData = req.body;
		const updatedReview = await reviewController.patch(reviewId, updatedReviewData);
		res.json('Review Updated successfully');
	} catch (error) {
		next(error);
	}
}
export async function activate(req: Request, res: Response, next: NextFunction) {
	try {
		const reviewId = req.params.id;
		await reviewController.activate(reviewId);
		res.json('Review deleted successfully');
	} catch (error) {
		next(error);
	}
}
