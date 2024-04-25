import classNames from 'classnames';
import IUniversalTableHeaderProps from './UniversalTableHeader.props';
import { ISelectItem } from '../UniversalTable.props';
import './UniversalTableHeader.scss';

export const UniversalTableHeader = ({
	selectedData,
	className,
	...props
}: IUniversalTableHeaderProps) => {
	return (
		<div
			className={classNames('UniversalTableHeader', className)}
			style={{ gridTemplateColumns: `repeat(${selectedData.length},1fr)` }}
			{...props}>
			{selectedData.map((selectedItem: ISelectItem) => (
				<div className='UniversalTableHeader__item' key={selectedItem.id}>
					{selectedItem.label}
				</div>
			))}
		</div>
	);
};
