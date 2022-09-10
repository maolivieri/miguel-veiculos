import { IconBaseProps } from "react-icons";
import { HiOutlineClipboardList } from "react-icons/hi";

interface IProps extends IconBaseProps {}

export function IconDocumentationComponent({
  size = "1.2rem",
  ...rest
}: IProps) {
  return (
    <HiOutlineClipboardList
      style={{
        height: size,
        width: size,
      }}
      {...rest}
    />
  );
}
