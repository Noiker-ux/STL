import axios from "axios";
import { useState } from "react";
import style from "./SelectBox.module.css";
import classNames from "classnames";
import SelectBoxProps from "./SelectBox.props";
import ListDropDown from "./ListDropDown/ListDropDown";
import { SelectBoxContext } from "./Context";

export default function SelectBox({ className, ...props }: SelectBoxProps) {
  const [users, setUsers] = useState();
  const [showUsers, setShowUsers] = useState(false);
  const [followers, setFollowers] = useState();

  const getList = async () => {
    const { data } = await axios.get("https://api.github.com/users?since=100");
    return data;
  };

  const handleShowList = async () => {
    setUsers(await getList());
    setShowUsers((prev) => !prev);
  };

  const getFollowers = async (userName: string) => {
    const { data } = await axios.get(
      `https://api.github.com/users/${userName}/following`
    );

    setFollowers(data);
  };

  const [cords, setCoords] = useState();

  return (
    <div className={classNames(style.wrap, className)} {...props}>
      <div className={style.select} onClick={handleShowList}>
        Список пользователей
        <img
          src="/arrow.svg"
          alt="Arrow"
          className={classNames({ [style.active]: showUsers })}
        />
      </div>
      <SelectBoxContext.Provider
        value={{ followers, setFollowers, getFollowers, cords, setCoords }}
      >
        {showUsers && users && <ListDropDown users={users} arrow={true} />}
      </SelectBoxContext.Provider>
    </div>
  );
}
