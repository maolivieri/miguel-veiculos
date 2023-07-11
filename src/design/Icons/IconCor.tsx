import { IconBaseProps } from "react-icons";
import { VscSymbolColor } from "react-icons/vsc";

interface IProps extends IconBaseProps {}

export function IconCorComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <VscSymbolColor
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
