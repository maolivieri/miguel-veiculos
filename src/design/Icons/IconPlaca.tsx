import { IconBaseProps } from "react-icons";
import { AiOutlineNumber } from "react-icons/ai";

interface IProps extends IconBaseProps {}

export function IconPlacaComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <AiOutlineNumber
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
