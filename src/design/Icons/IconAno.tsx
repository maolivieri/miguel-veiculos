import { IconBaseProps } from "react-icons";
import { BsCalendar4Week } from "react-icons/bs";

interface IProps extends IconBaseProps {}

export function IconAnoComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <BsCalendar4Week
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
