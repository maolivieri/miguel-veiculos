import { IconBaseProps } from "react-icons";
import { BsGear } from "react-icons/bs";

interface IProps extends IconBaseProps {}

export function IconCorComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <BsGear
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
