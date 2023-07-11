import { IconBaseProps } from "react-icons";
import { LiaCouchSolid } from "react-icons/lia";

interface IProps extends IconBaseProps {}

export function IconAssentosComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <LiaCouchSolid
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
