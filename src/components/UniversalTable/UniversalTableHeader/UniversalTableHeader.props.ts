import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ISelectItem } from '../UniversalTable.props';

export default interface IUniversalTableHeaderProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	selectedData: ISelectItem[];
}
