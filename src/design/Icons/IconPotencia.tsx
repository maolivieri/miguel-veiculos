import { IconBaseProps } from "react-icons";
import { HiOutlineLightningBolt } from "react-icons/hi";

interface IProps extends IconBaseProps {}

export function IconPotenciaComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <HiOutlineLightningBolt
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
