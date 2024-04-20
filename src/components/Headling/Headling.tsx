import HeadlingProps from "./Headling.props";
import classNames from "classnames";
import style from "./Headling.module.css";

export default function Headling({
  className,
  children,
  ...props
}: HeadlingProps) {
  return (
    <h1 className={classNames(style.headling, className)} {...props}>
      {children}
    </h1>
  );
}
