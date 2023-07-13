import { IconBaseProps } from "react-icons";
import { GoGear } from "react-icons/go";

interface IProps extends IconBaseProps {}

export function IconPotenciaComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <GoGear
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
