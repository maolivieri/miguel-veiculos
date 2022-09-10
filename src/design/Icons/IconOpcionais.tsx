import { IconBaseProps } from "react-icons";
import { BsCheck2Square } from "react-icons/bs";

interface IProps extends IconBaseProps {}

export function IconOpcionaisComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <BsCheck2Square
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
