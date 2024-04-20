import { Link } from "react-router-dom";
import style from "./InfoBlock.module.css";
import InfoBlockProps from "./InfoBlock.props";
import classNames from "classnames";
import { normalizeTel } from "../../helpers/normalizeTel";

export default function InfoBlock({
  targer,
  value,
  typeValue = "text",
  textSize = "small",
  className,
  ...props
}: InfoBlockProps) {
  switch (typeValue) {
    case "link":
      return (
        <div className={classNames(style.infoBlock, className)} {...props}>
          <p
            className={
              textSize == "small" ? style.targetSmall : style.targetBig
            }
          >
            {targer}
          </p>
          <Link
            className={textSize == "small" ? style.valueSmall : style.valueBig}
            to={value}
          >
            {value}
          </Link>
        </div>
      );
    case "mail":
      return (
        <div className={classNames(style.infoBlock, className)} {...props}>
          <p
            className={
              textSize == "small" ? style.targetSmall : style.targetBig
            }
          >
            {targer}
          </p>
          <a
            className={textSize == "small" ? style.valueSmall : style.valueBig}
            href={`mailto:${value}`}
          >
            {value}
          </a>
        </div>
      );
    case "tel":
      return (
        <div className={classNames(style.infoBlock, className)} {...props}>
          <p
            className={
              textSize == "small" ? style.targetSmall : style.targetBig
            }
          >
            {targer}
          </p>
          <a
            className={textSize == "small" ? style.valueSmall : style.valueBig}
            href={`tel:+${value}`}
          >
            {normalizeTel(value)}
          </a>
        </div>
      );
    default:
      return (
        <div className={classNames(style.infoBlock, className)} {...props}>
          <p
            className={
              textSize == "small" ? style.targetSmall : style.targetBig
            }
          >
            {targer}
          </p>
          <p
            className={textSize == "small" ? style.valueSmall : style.valueBig}
          >
            {value}
          </p>
        </div>
      );
  }
}
