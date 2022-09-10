import { IconBaseProps } from "react-icons";
import { MdAirlineSeatIndividualSuite } from "react-icons/md";

interface IProps extends IconBaseProps {}

export function IconConfortoComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <MdAirlineSeatIndividualSuite
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
