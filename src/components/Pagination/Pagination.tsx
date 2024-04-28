import IPaginationProps from "./Pagination.props";
import classNames from "classnames";
import "./Pagination.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { handlePagination } from "../../store/pagination.slice/pagination.slice";
import { PaginationButton } from "./PaginationButton/PaginationButton";

export const Pagination = ({ className, ...props }: IPaginationProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { page, countPages, nickname, first, last, next, prev } = useSelector(
    (s: RootState) => s.pagination
  );

  return (
    <div className={classNames("paginationWrapper", className)} {...props}>
      {first && (
        <PaginationButton
          arrow="two"
          orientation="toLeft"
          onClick={() => {
            dispatch(
              handlePagination({
                nickname: nickname,
                navigate: "first",
                page: 1,
              })
            );
          }}
        />
      )}
      {first && (
        <PaginationButton
          arrow="one"
          orientation="toLeft"
          onClick={() => {
            dispatch(
              handlePagination({
                nickname: nickname,
                navigate: "prev",
                page: page - 1,
              })
            );
          }}
        />
      )}
      <div>
        <p>
          {page}/{countPages}
        </p>
      </div>
      {last && (
        <PaginationButton
          arrow="one"
          orientation="toRight"
          onClick={() => {
            dispatch(
              handlePagination({
                nickname: nickname,
                navigate: "next",
                page: page + 1,
              })
            );
          }}
        />
      )}

      {last && (
        <PaginationButton
          arrow="two"
          orientation="toRight"
          onClick={() =>
            dispatch(
              handlePagination({
                nickname: nickname,
                navigate: "last",
                page: countPages,
              })
            )
          }
        />
      )}
    </div>
  );
};
