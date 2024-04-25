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
			style={{
				gridTemplateColumns: `repeat(${selectedData.length},${
					100 / selectedData.length
				}%)`,
			}}>
			{dataFromBack &&
				dataFromBack.map((itemFromBack) => {
					return selectedData.map((itemSelect, index) => (
						<div
							className='UniversalTableBody__item'
							style={
								index != 0 && selectedData.length % (index + 1) == 0
									? { borderRight: 'none' }
									: {}
							}>
							{itemFromBack[itemSelect.id] ?? 'Error'}
						</div>
					));
				})}
		</div>
	);
};
