import { forwardRef } from "react";
import style from "./Input.module.css";
import InputProps from "./Input.props";
import classNames from "classnames";

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, label, ...props },
  ref
) {
  return (
    <div className={style.blockInput}>
      {label && <label className={style.label}>{label}</label>}
      <input
        className={classNames(style.input, className)}
        type="text"
        ref={ref}
        {...props}
      />
    </div>
  );
});
