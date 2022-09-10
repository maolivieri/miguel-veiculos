import { IconBaseProps } from "react-icons";
import { GrTechnology } from "react-icons/gr";

interface IProps extends IconBaseProps {}

export function IconTecnologiaComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <GrTechnology
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
