import IPaginationProps from './Pagination.props';
import classNames from 'classnames';
import './Pagination.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { handlePagination } from '../../store/pagination.slice/pagination.slice';

export const Pagination = ({ className, ...props }: IPaginationProps) => {
	const dispatch = useDispatch<AppDispatch>();
	const { page, countPages, nickname } = useSelector(
		(s: RootState) => s.pagination,
	);

	return (
		<div className={classNames('paginationWrapper', className)} {...props}>
			<button
				onClick={() =>
					handlePagination({ nickname: nickname, navigate: 'first', page: 1 })
				}>
				First
			</button>
			<button
				onClick={() =>
					handlePagination({ nickname: nickname, navigate: 'prev', page: page })
				}>
				Prev
			</button>
			<div>
				<p>
					{page}/{countPages}
				</p>
			</div>
			<button
				onClick={() => {
					dispatch(
						handlePagination({
							nickname: nickname,
							navigate: 'next',
							page: page + 1 > countPages ? countPages : page + 1,
						}),
					);
				}}>
				Next
			</button>
			<button onClick={() => dispatch(handlePagination(nickname, 'last'))}>
				Last
			</button>
		</div>
	);
};
