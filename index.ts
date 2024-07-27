import mongoose from 'mongoose';

// Connect to MongoDB
mongoose
	.connect('mongodb://localhost:27017/hotel-management')

	.then(() => {
		console.log('Connected to MongoDB');
		// Your code here
	})
	.catch((error) => {
		console.error('Failed to connect to MongoDB', error);
	});
