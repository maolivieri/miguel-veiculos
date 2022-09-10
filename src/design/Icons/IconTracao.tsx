import { IconBaseProps } from "react-icons";
import { BiTransferAlt } from "react-icons/bi";

interface IProps extends IconBaseProps {}

export function IconTracaoComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <BiTransferAlt
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
