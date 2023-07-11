import { IconBaseProps } from "react-icons";
import { LiaTruckPickupSolid } from "react-icons/lia";

interface IProps extends IconBaseProps {}

export function IconCarroceriaComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <LiaTruckPickupSolid
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
