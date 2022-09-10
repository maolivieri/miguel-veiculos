import { IconBaseProps } from "react-icons";
import { TbCurrencyDollar } from "react-icons/tb";

interface IProps extends IconBaseProps {}

export function IconPrecoComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <TbCurrencyDollar
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
