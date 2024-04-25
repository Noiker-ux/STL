import IUniversalTableProps from './UniversalTable.props';
import classNames from 'classnames';
import { UniversalTableHeader } from './UniversalTableHeader/UniversalTableHeader';

export const UniversalTable = ({
	dataFromBack,
	selectedData,
	className,
	...props
}: IUniversalTableProps) => {
	return (
		<div className={classNames('UniversalTable', classNames)} {...props}>
			<UniversalTableHeader selectedData={selectedData} />
		</div>
	);
};