import { IconBaseProps } from "react-icons";
import { PiPathBold } from "react-icons/pi";

interface IProps extends IconBaseProps {}

export function IconKMComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <PiPathBold
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
