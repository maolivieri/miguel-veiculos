import { IconBaseProps } from "react-icons";
import { GiPathDistance } from "react-icons/gi";

interface IProps extends IconBaseProps {}

export function IconKMComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <GiPathDistance
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
