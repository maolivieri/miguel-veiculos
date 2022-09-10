import { IconBaseProps } from "react-icons";
import { GiGearStickPattern } from "react-icons/gi";

interface IProps extends IconBaseProps {}

export function IconCambioComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <GiGearStickPattern
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
