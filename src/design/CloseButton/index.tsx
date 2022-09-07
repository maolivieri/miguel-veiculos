import styles from "./styles.module.scss";

import { HiX } from "react-icons/hi";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function CloseButton({ ...props }: IconButtonProps) {
  return (
    <button className={styles.buttonContainer} {...props}>
      <HiX size="1.4rem" />
    </button>
  );
}
