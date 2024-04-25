import classNames from 'classnames';
import IUniversalTableProps from '../UniversalTable.props';
import './UniversalTableBody.scss';

export const UniversalTableBody = ({
	dataFromBack,
	selectedData,
	className,
	...props
}: IUniversalTableProps) => {
	return (
		<div
			className={classNames('UniversalTableBody', className)}
			{...props}
			style={{ gridTemplateColumns: `repeat(${selectedData.length},1fr)` }}>
			{dataFromBack &&
				dataFromBack.map((itemFromBack) => {
					return selectedData.map((itemSelect) => (
						<div className='UniversalTableBody__item'>
							{itemFromBack[itemSelect.id] ?? 'Error'}
						</div>
					));
				})}
		</div>
	);
};
