import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default interface IPaginationButtonProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	arrow: 'one' | 'two';
	orientation: 'toLeft' | 'toRight';
}
