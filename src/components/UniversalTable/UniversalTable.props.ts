import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ISelectItem {
	id: string;
	label: string;
}

export default interface IUniversalTableProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	selectedData: ISelectItem[];
	dataFromBack: any[];
}
