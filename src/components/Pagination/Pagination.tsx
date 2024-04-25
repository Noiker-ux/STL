import IPaginationProps from './Pagination.props';
import classNames from 'classnames';
import './Pagination.scss';

export const Pagination = ({ className, ...props }: IPaginationProps) => {
	return (
		<div className={classNames('paginationWrapper', className)} {...props}>
			Pagination
		</div>
	);
};
