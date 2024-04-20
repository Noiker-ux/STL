import { MouseEvent, useState } from "react";
import style from "./ItemDropDown.module.css";

import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import { useSelectBoxContext } from "../Context";

export default function ItemDropDown({ user, arrow }) {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const [active, setActive] = useState();

  const { setCoords, getFollowers } = useSelectBoxContext();
  const navigate = useNavigate();

  const handleClickItem = (userName: string) => {
    if (arrow) {
      getFollowers(userName);
      setActive(true);
    } else {
      navigate(`/detail/${userName}`);
    }
  };

  return (
    <div>
      <div
        className={classNames(style.item, { [style.activeUserBG]: active })}
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        onClick={(e: MouseEvent) => {
          e.stopPropagation();
          const top = e.target.getBoundingClientRect().top;
          const left = e.target.getBoundingClientRect().left;
          setCoords({ top: top, left: left });
          handleClickItem(user.login);
        }}
      >
        {user.login}
        {((arrow && isHovering) || (arrow && active)) && (
          <img
            src="/arrow.svg"
            className={classNames(style.arrowMore, {
              [style.activeUser]: active,
            })}
            alt="Подробнее"
          />
        )}
      </div>
    </div>
  );
}
