import Headling from "../../components/Headling/Headling";
import MyInfo from "../../components/MyInfo/MyInfo";
import SelectBox from "../../components/SelectBox/SelectBox";
import style from "./MainPage.module.css";

export default function MainPage() {
  return (
    <div className={style.container}>
      <Headling className={style.mainTitle}>
        Тестовое задание для кандидата на должность frontend developer в
        компанию Smart Techno Lab.
      </Headling>
      <SelectBox />
      <MyInfo className={style.footer} />
    </div>
  );
}
