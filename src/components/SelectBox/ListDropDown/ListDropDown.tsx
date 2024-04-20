import classNames from "classnames";
import ItemDropDown from "../ItemDropDown/ItemDropDown";
import style from "./ListDropDown.module.css";
import { WheelEventHandler } from "react";
import { useSelectBoxContext } from "../Context";

interface IList {
  users: any;
  arrow: boolean;
  coords?: { top: number; left: number };
}

export default function ListDropDown({ users, arrow, coords }: IList) {
  const { followers, cords, setFollowers } = useSelectBoxContext();

  const mouseWheelHandle: WheelEventHandler = (e) => {
    e.stopPropagation();
    arrow && setFollowers(null);
  };

  return (
    <div
      className={classNames(style.list, { [style.fixed]: coords })}
      style={
        coords && {
          top: coords.top + 10 + "px",
          left: coords.left + 500 + "px",
        }
      }
      onWheel={mouseWheelHandle}
    >
      {users.map((u) => (
        <ItemDropDown key={u.login} user={u} arrow={arrow} />
      ))}
      {arrow && followers && (
        <ListDropDown users={followers} arrow={false} coords={cords} />
      )}
    </div>
  );
}
