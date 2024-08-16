export interface ICustomer {
	_id?: string;
	name: string;
}

export interface ICustomerMeta {
	data: ICustomer[];
	meta: {
		total: number;
	};
}
