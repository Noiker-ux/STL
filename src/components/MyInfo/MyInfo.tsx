import InfoBlock from "../InfoBlock/InfoBlock";
import style from "./MyInfo.module.css";
import classNames from "classnames";
import MyInfoProps from "./MyInfo.props";

export default function MyInfo({ className, ...props }: MyInfoProps) {
  return (
    <div className={classNames(style.wrapper, className)} {...props}>
      <InfoBlock targer="Имя" value="Александр" />
      <InfoBlock targer="Телефон" value="79965224284" typeValue="tel" />
      <InfoBlock targer="Почта" value="noiker01@mail.ru" typeValue="mail" />
      <InfoBlock targer="Дата рождения" value="05.08.2001" />
      <InfoBlock targer="Стаж работы" value="2 года" />
      <InfoBlock
        targer="GitHub"
        value="https://github.com/Noiker-ux"
        typeValue="link"
      />
    </div>
  );
}
