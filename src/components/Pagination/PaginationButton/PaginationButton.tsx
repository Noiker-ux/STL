import IPaginationButtonProps from './PaginationButton.props';
import classNames from 'classnames';
import './PaginationButton.scss';
export const PaginationButton = ({
	arrow,
	orientation,
	className,
	...props
}: IPaginationButtonProps) => {
	return (
		<button className={classNames('PaginationButton', className)} {...props}>
			<img
				title='ArrowPagination'
				src={arrow == 'one' ? '/arrow_one.svg' : '/arrows_two.svg'}
				className={classNames('arrowNavigation', {
					['arrowToLeft']: orientation === 'toLeft',
					['arrowToRight']: orientation === 'toRight',
				})}
			/>
		</button>
	);
};
