import IPaginationButtonProps from "./PaginationButton.props";
import classNames from "classnames";
import "./PaginationButton.scss";

export const PaginationButton = ({
  arrow,
  orientation,
  className,
  ...props
}: IPaginationButtonProps) => {
  return (
    <button className={classNames("PaginationButton", className)} {...props}>
      <img
        title="ArrowPagination"
        src={
          arrow == "one" ? "/pagination/arrow.png" : "/pagination/arrows.png"
        }
        className={classNames("arrowNavigation", {
          ["arrowToLeft"]: orientation === "toLeft",
          ["arrowToRight"]: orientation === "toRight",
        })}
      />
    </button>
  );
};
