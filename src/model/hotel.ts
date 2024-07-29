import mongoose, { Schema } from 'mongoose';
import { IAddress, IHotel } from '../interface/hotel';

const AddressSchema = new Schema<IAddress>({
	street: {
		type: String,
	},
	city: {
		type: String,
	},
	state: {
		type: String,
	},
	country: {
		type: String,
	},
	zip: {
		type: String,
	},
});

const HotelSchema = new Schema<IHotel>({
	slug: {
		type: String,
		required: true,
		unique: true,
	},
	title: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
	},
	address: AddressSchema,
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
});

const Hotel = mongoose.model<IHotel>('Hotel', HotelSchema);

export default Hotel;
