import IPaginationProps from './Pagination.props';
import classNames from 'classnames';
import './Pagination.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { handlePagination } from '../../store/pagination.slice/pagination.slice';
import { PaginationButton } from './PaginationButton/PaginationButton';

export const Pagination = ({ className, ...props }: IPaginationProps) => {
	const dispatch = useDispatch<AppDispatch>();
	const { page, countPages, nickname } = useSelector(
		(s: RootState) => s.pagination,
	);

	return (
		<div className={classNames('paginationWrapper', className)} {...props}>
			<button
				onClick={() =>
					dispatch(
						handlePagination({
							nickname: nickname,
							navigate: 'first',
							page: 1,
						}),
					)
				}>
				First
			</button>
			<button
				onClick={() =>
					dispatch(
						handlePagination({
							nickname: nickname,
							navigate: 'prev',
							page: page - 1,
						}),
					)
				}>
				Prev
			</button>
			<div>
				<p>
					{page}/{countPages}
				</p>
			</div>
			<PaginationButton
				arrow='one'
				orientation='toRight'
				onClick={() => {
					dispatch(
						handlePagination({
							nickname: nickname,
							navigate: 'next',
							page: page + 1,
						}),
					);
				}}
			/>

			<PaginationButton
				arrow='two'
				orientation='toRight'
				onClick={() =>
					dispatch(
						handlePagination({
							nickname: nickname,
							navigate: 'last',
							page: countPages,
						}),
					)
				}
			/>
		</div>
	);
};
