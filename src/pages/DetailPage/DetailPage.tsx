import { useLoaderData } from 'react-router-dom';
import style from './Detail.module.css';
import { Input } from '../../components/Input/Input';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TableFollowers from '../../components/TableFollowers/TableFollowers';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import { formatterDate } from '../../helpers/formatterDate';
import Preloader from '../../components/Preloader/Preloader';
import hasPagination from '../../helpers/paginationHas';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { paginationActions } from '../../store/pagination.slice';
import { UniversalTable } from '../../components/UniversalTable/UniversalTable';
import { FollowersTable } from '../../components/UniversalTable/SelectedData/FollowersTable';

export default function DetailPage() {
	const data = useLoaderData();
	const dispatch = useDispatch<AppDispatch>();
	const pagination = useSelector((s: RootState) => s.pagination);

	const [followers, setFollowers] = useState();
	const [loading, setLoading] = useState<boolean>(false);

	const getListFollowers = async (login: string) => {
		try {
			setLoading(true);
			const responce = await axios.get(
				`https://api.github.com/users/${login}/following?page=${1}&per_page=10`,
			);
			const linkHeader = responce.headers.link;
			const paginationButton = hasPagination(linkHeader);
			dispatch(
				paginationActions.changePage({
					page: 1,
					next: paginationButton.next,
					prev: paginationButton.prev,
				}),
			);
			setFollowers(responce.data);
			console.log(responce.data);

			setLoading(false);
		} catch (e) {
			console.error(`Ошибка запроса подписок пользователя ${e}`);
			setLoading(false);
			return;
		}
	};

	useEffect(() => {
		getListFollowers(data.login);
	}, []);

	const handlePagination = async (login: string, page: 'next' | 'prev') => {
		const newPage = page == 'next' ? pagination.page + 1 : pagination.page - 1;
		const responce = await axios.get(
			`https://api.github.com/users/${login}/following?per_page=10&page=${newPage}`,
		);
		const linkHeader = responce.headers.link;
		const paginationButton = hasPagination(linkHeader);
		dispatch(
			paginationActions.changePage({
				page: newPage,
				prev: paginationButton.prev,
				next: paginationButton.next,
			}),
		);
		setFollowers(responce.data);
	};

	return (
		<div className={style.container}>
			{loading && <Preloader />}
			{!loading && (
				<div className={style.wrapper__info}>
					<img className={style.avatar} src={data.avatar_url} alt='Аватар' />
					<div className={style.info}>
						<InfoBlock
							targer='ID'
							value={data.id ?? 'No information'}
							textSize='big'
						/>
						<InfoBlock
							targer='nickname'
							value={data.login ?? 'No information'}
							textSize='big'
						/>
						<InfoBlock
							targer='Имя'
							value={data.name ?? 'No information'}
							textSize='big'
						/>
						<InfoBlock
							targer='Почта'
							value={data.email ?? 'No information'}
							textSize='big'
						/>
						<InfoBlock
							targer='Компания'
							value={data.company ?? 'No information'}
							textSize='big'
						/>
						<InfoBlock
							targer='Дата регистрации'
							value={formatterDate(data.created_at) ?? 'No information'}
							textSize='big'
						/>
					</div>
				</div>
			)}

			<UniversalTable dataFromBack={followers} selectedData={FollowersTable} />
			{followers && !loading && (
				<div className={style.wrapper__table}>
					<div className={style.search}>
						<Input
							label='Поиск по nickname'
							placeholder='Введите nickname'
							onChange={(e) => setSearchValue(e.target.value)}
							className={style.inp}
						/>
						<TableFollowers data={followers} />
						<div className={style.pagination}>
							{pagination.prev && (
								<p
									onClick={() => {
										handlePagination(data.login, 'prev');
									}}>
									prev
								</p>
							)}
							<p>{pagination.page}</p>
							{pagination.next && (
								<p
									onClick={() => {
										handlePagination(data.login, 'next');
									}}>
									next
								</p>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
