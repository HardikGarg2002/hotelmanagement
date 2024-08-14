import { ITable, TableStatus } from '../interface/table';
import mongoose, { Schema } from 'mongoose';

const TableSchema = new Schema<ITable>({
	slug: {
		type: String,
		required: true,
		unique: true,
	},
	restaurant_slug: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		enum: Object.values(TableStatus),
		default: TableStatus.AVAILABLE,
	},
	capacity: {
		type: Number,
		default: 2,
	},
	floor: {
		type: Number,
		default: 1,
	},
});

const Table = mongoose.model<ITable>('Table', TableSchema);

export default Table;
