import { IconBaseProps } from "react-icons";
import { ImPower } from "react-icons/im";

interface IProps extends IconBaseProps {}

export function IconPotenciaComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <ImPower
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
