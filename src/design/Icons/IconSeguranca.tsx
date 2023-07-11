import { IconBaseProps } from "react-icons";
import { AiOutlineSafety } from "react-icons/ai";

interface IProps extends IconBaseProps {}

export function IconSegurancaComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <AiOutlineSafety
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
