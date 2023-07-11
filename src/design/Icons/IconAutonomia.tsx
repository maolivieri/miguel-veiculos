import { IconBaseProps } from "react-icons";
import { PiLeafBold } from "react-icons/pi";

interface IProps extends IconBaseProps {}

export function IconAutonomiaComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <PiLeafBold
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
