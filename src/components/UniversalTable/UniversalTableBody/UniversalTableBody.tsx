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
		<div className={classNames('UniversalTableBody', className)} {...props}>
			{dataFromBack &&
				dataFromBack.map((itemFromBack, idx) => {
					return (
						<div
							key={itemFromBack.id}
							className='UniversalTableBody__row'
							style={{
								gridTemplateColumns: `repeat(${selectedData.length},${
									100 / selectedData.length
								}%)`,
								animationDelay: `${0.125 * idx}s`,
							}}>
							{selectedData.map((itemSelect, index) => (
								<div
									className='UniversalTableBody__item'
									style={
										index != 0 && selectedData.length % (index + 1) == 0
											? { borderRight: 'none' }
											: {}
									}>
									{itemFromBack[itemSelect.id] ?? 'Error'}
								</div>
							))}
						</div>
					);
				})}
		</div>
	);
};
