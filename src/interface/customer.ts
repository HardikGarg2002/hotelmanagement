import { IMetaData } from './metaData';

export interface ICustomer {
	_id?: string;
	name: string;
}

export interface ICustomerMeta {
	data: ICustomer[];
	meta: IMetaData;
}
