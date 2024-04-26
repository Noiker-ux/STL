import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default interface IPaginationProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	page: number;
	countPages: number;
	nickname: string;
}
