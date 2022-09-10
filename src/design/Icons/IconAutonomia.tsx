import { IconBaseProps } from "react-icons";
import { FaLeaf } from "react-icons/fa";

interface IProps extends IconBaseProps {}

export function IconAutonomiaComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <FaLeaf
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
