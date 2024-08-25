import Table from '../model/table';
import { ITable, ITableMeta } from '../interface/table';

export default class TableService {
	public create = async (inputTable: Partial<ITable>): Promise<ITable> => {
		const table = new Table(inputTable);
		return await table.save();
	};

	public get = async (): Promise<ITableMeta> => {
		const tables = await Table.find();
		const total = tables.length;
		return { data: tables, meta: { total } };
	};

	public getById = async (id: string): Promise<ITable> => {
		const table = await Table.findById(id);
		if (!table) {
			throw new Error('Table not found');
		}
		return table;
	};

	public patch = async (id: string, updatedTableData: Partial<ITable>): Promise<void> => {
		await Table.findByIdAndUpdate(id, updatedTableData);
	};

	public activate = async (id: string): Promise<void> => {
		await Table.findByIdAndUpdate(id, { status: 'ACTIVE' });
	};

	public getTableByRestaurantSlug = async (restaurantSlug: string): Promise<ITable[]> => {
		return await Table.find({ restaurant_slug: restaurantSlug });
	};
}
