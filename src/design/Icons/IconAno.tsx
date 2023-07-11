import { IconBaseProps } from "react-icons";
import { LuCalendarDays } from "react-icons/lu";

interface IProps extends IconBaseProps {}

export function IconAnoComponent({ size = "1.2rem", ...rest }: IProps) {
  return (
    <LuCalendarDays
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
