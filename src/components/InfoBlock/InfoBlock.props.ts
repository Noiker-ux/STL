import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface InfoBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  targer: string;
  value: string;
  typeValue?: "text" | "link" | "tel" | "mail";
  textSize?: "small" | "big";
}
