import { useLoaderData } from "react-router-dom";
import style from "./Detail.module.css";
import { useEffect, useState } from "react";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import { formatterDate } from "../../helpers/formatterDate";
import Preloader from "../../components/Preloader/Preloader";
import { UniversalTable } from "../../components/UniversalTable/UniversalTable";
import { FollowersTable } from "../../components/UniversalTable/SelectedData/FollowersTable";
import { Pagination } from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { handlePagination } from "../../store/pagination.slice/pagination.slice";

export default function DetailPage() {
  const data = useLoaderData();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { following } = useSelector((s: RootState) => s.pagination);

  const getListFollowers = async (login: string) => {
    try {
      setLoading(true);
      dispatch(
        handlePagination({ nickname: login, navigate: "first", page: 1 })
      );
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

  return (
    <div className={style.container}>
      {loading && <Preloader />}
      {!loading && (
        <div className={style.wrapper__info}>
          <img className={style.avatar} src={data.avatar_url} alt="Аватар" />
          <div className={style.info}>
            <InfoBlock
              targer="ID"
              value={data.id ?? "No information"}
              textSize="big"
            />
            <InfoBlock
              targer="nickname"
              value={data.login ?? "No information"}
              textSize="big"
            />
            <InfoBlock
              targer="Имя"
              value={data.name ?? "No information"}
              textSize="big"
            />
            <InfoBlock
              targer="Почта"
              value={data.email ?? "No information"}
              textSize="big"
            />
            <InfoBlock
              targer="Компания"
              value={data.company ?? "No information"}
              textSize="big"
            />
            <InfoBlock
              targer="Дата регистрации"
              value={formatterDate(data.created_at) ?? "No information"}
              textSize="big"
            />
          </div>
        </div>
      )}

      <UniversalTable dataFromBack={following} selectedData={FollowersTable} />
      <Pagination className={style.paginationFollowing} />
    </div>
  );
}
