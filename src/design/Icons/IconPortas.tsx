import { IconBaseProps } from "react-icons";
import { BsDoorClosed } from "react-icons/bs";

interface IProps extends IconBaseProps {}

export function IconPortasComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <BsDoorClosed
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
