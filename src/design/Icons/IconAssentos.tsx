import { IconBaseProps } from "react-icons";
import { GiCarSeat } from "react-icons/gi";

interface IProps extends IconBaseProps {}

export function IconAssentosComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <GiCarSeat
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
