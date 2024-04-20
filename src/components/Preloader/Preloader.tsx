import style from "./Preloader.module.css";
import classNames from "classnames";

export default function Preloader() {
  return (
    <div className={style.preloader}>
      <div className={classNames(style.circle, style.animate1)}></div>
      <div className={classNames(style.circle, style.animate2)}></div>
      <div className={classNames(style.circle, style.animate3)}></div>
      <p>Loading...</p>
    </div>
  );
}
