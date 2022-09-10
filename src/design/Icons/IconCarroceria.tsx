import { IconBaseProps } from "react-icons";
import { FaTruckMonster } from "react-icons/fa";

interface IProps extends IconBaseProps {}

export function IconCarroceriaComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <FaTruckMonster
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
