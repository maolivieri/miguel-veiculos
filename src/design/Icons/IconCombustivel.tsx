import { IconBaseProps } from "react-icons";
import { BiGasPump } from "react-icons/bi";

interface IProps extends IconBaseProps {}

export function IconCombustivelComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <BiGasPump
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
