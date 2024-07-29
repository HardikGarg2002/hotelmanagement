import { IRestaturant, RestaurantType } from '../interface/restaurant';

import mongoose, { Schema } from 'mongoose';

const RestaurantSchema = new Schema<IRestaturant>({
	title: {
		type: String,
		required: true,
	},
	hotel_slug: {
		type: String,
		required: true,
	},
	restaurant_type: {
		type: String,
		enum: Object.values(RestaurantType),
	},

	contact_info: {
		phone: {
			type: String,
		},
		email: {
			type: String,
		},
	},
	images: [
		{
			type: String,
		},
	],
	opening_hours: {
		type: String,
	},
	menu: [
		{
			title: {
				type: String,
			},
			price: {
				type: Number,
			},
			description: {
				type: String,
			},
			images: [
				{
					type: String,
				},
			],
		},
	],
});

const Restaurant = mongoose.model<IRestaturant>('Restaurant', RestaurantSchema);

export default Restaurant;
