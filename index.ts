import express from 'express';
import env from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import { ConfigurationError, SystemError, ErrorHandlerMiddleware } from './src/middleware/error-middleware';
import HotelRouter from './src/route/hotel-route';
import RoomRouter from './src/route/room-route';
import ReviewRouter from './src/route/review-route';
import RestaurantRouter from './src/route/restaurant-route';
import BookingRouter from './src/route/booking-route';

env.config();
const port = process.env.PORT || 3000;
const environment = process.env.ENVIRONMENT || 'local';
const service = process.env.SERVICE || 'local';

const app = express().use(cors()).use(express.json());

async function connectToDB() {
	const MONGO_URI = process.env.MONGO_URI;
	const MONGO_DB_NAME = process.env.MONGO_DB_NAME;
	const MONGO_TIMEOUT = process.env.MONGO_TIMEOUT || 15000;
	if (!MONGO_URI) {
		throw new ConfigurationError('MONGO_URI is not set in the envionment');
	}
	if (!MONGO_DB_NAME) {
		throw new ConfigurationError('MONGO_DB_NAME is not set in the envionment');
	}
	try {
		await mongoose.connect(MONGO_URI, {
			dbName: MONGO_DB_NAME,
			minPoolSize: 5,
			retryWrites: true,
			w: 'majority',
			serverSelectionTimeoutMS: Number(MONGO_TIMEOUT),
		});
		console.log('database connected successfully');
	} catch (err) {
		console.log('error in connecting to mongoDB', err);
	}
}
connectToDB();

app.get('/health', (req, res) => {
	res.send({
		message: 'Service running',
		dbConnected: mongoose.connection.readyState === 1,
		environment,
	});
});
app.get('/', (req, res) => res.send('Express on Vercel'));

app.use('/hotel', HotelRouter);
app.use('/room', RoomRouter);
app.use('/review', ReviewRouter);
app.use('/restaurant', RestaurantRouter);
app.use('/booking', BookingRouter);

app.use((err: SystemError, req: express.Request, res: express.Response, next: express.NextFunction) => {
	res.status(500).send({
		error: err.message,
		stack: err.stack,
	});
});

app.use('*', (req, res) => {
	res.status(404).send({
		error: 'AUTH404: Could not find the page requested by you',
	});
});
app.use(ErrorHandlerMiddleware);
app.listen(port, () => {
	console.log('App listening on port service is ', port, service);
});
// https://www.youtube.com/watch?v=T5t46vuW8fo&ab_channel=CodeBucks
