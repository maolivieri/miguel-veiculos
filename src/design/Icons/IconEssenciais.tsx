import { IconBaseProps } from "react-icons";
import { AiOutlineCheckCircle } from "react-icons/ai";

interface IProps extends IconBaseProps {}

export function IconEssenciaisComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <AiOutlineCheckCircle
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
