import TableFollowersProps from "./TableFollowers.props";
import style from "./TableFollowers.module.css";

export default function TableFollowers({ data }: TableFollowersProps[]) {
  return (
    <div className={style.table}>
      <div className={style.table__head}>
        <p>ID</p>
        <p>ID ноды</p>
        <p>nickname</p>
        <p>Тип</p>
        <p>Админ</p>

        {data.map((f: TableFollowersProps) => (
          <>
            <p>{f.id}</p>
            <p>{f.node_id}</p>
            <p>{f.login}</p>
            <p>{f.type}</p>
            <p>{f.site_admin && <img src="/mark.svg" alt="Mark" />}</p>
          </>
        ))}
      </div>
    </div>
  );
}
