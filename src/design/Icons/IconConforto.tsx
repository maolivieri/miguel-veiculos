import { IconBaseProps } from "react-icons";
import { FaRegStar } from "react-icons/fa";

interface IProps extends IconBaseProps {}

export function IconConfortoComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <FaRegStar
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
