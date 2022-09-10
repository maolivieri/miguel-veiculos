import { IconBaseProps } from "react-icons";
import { AiFillSafetyCertificate } from "react-icons/ai";

interface IProps extends IconBaseProps {}

export function IconSegurancaComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <AiFillSafetyCertificate
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
