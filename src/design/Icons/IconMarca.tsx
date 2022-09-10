import { IconBaseProps } from "react-icons";
import { AiOutlineCar } from "react-icons/ai";

interface IProps extends IconBaseProps {}

export function IconMarcaComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <AiOutlineCar
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
