import IPaginationProps from './Pagination.props';
import classNames from 'classnames';
import './Pagination.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { handlePagination } from '../../store/pagination.slice/pagination.slice';

export const Pagination = ({
	nickname,

	countPages,
	className,
	...props
}: IPaginationProps) => {
	const dispatch = useDispatch<AppDispatch>();
	const { page } = useSelector((s: RootState) => s.pagination);

	return (
		<div className={classNames('paginationWrapper', className)} {...props}>
			<button
				onClick={() => dispatch(handlePagination(nickname, 'first', page))}>
				First
			</button>
			<button
				onClick={() => dispatch(handlePagination(nickname, 'prev', page))}>
				Prev
			</button>
			<div>
				<p>
					{page}/{countPages}
				</p>
			</div>
			<button onClick={() => dispatch(handlePagination(nickname, 'next'))}>
				Next
			</button>
			<button onClick={() => dispatch(handlePagination(nickname, 'last'))}>
				Last
			</button>
		</div>
	);
};
