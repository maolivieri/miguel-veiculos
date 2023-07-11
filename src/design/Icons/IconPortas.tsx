import { IconBaseProps } from "react-icons";
import { PiDoorBold } from "react-icons/pi";

interface IProps extends IconBaseProps {}

export function IconPortasComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <PiDoorBold
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
