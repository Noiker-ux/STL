import { Link } from "react-router-dom";
import HeaderProps from "./Header.props";
import style from "./Header.module.css";
import classNames from "classnames";

export default function Header({ className, ...props }: HeaderProps) {
  return (
    <header className={classNames(style.header, className)} {...props}>
      <Link to={"/"}>
        <img src="./logo.svg" alt="Логотип STL" />
      </Link>
    </header>
  );
}
