export interface ITable {
	_id?: string;
	restaurant_slug: string;
	slug: string;
	capacity: number;
	status: TableStatus;
	floor: number; // floor
}
// table for 2, table for 4, table for 6, table for 8, table for 10

export enum TableStatus {
	AVAILABLE = 'AVAILABLE',
	RESERVED = 'RESERVED',
	OCCUPIED = 'OCCUPIED',
}

export interface ITableMeta {
	data: ITable[];
	meta: {
		total: number;
	};
}
