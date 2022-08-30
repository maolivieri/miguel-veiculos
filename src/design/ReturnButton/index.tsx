import styles from "./styles.module.scss";

import { HiArrowNarrowLeft } from "react-icons/hi";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function ReturnButton({ ...props }: IconButtonProps) {
  return (
    <button className={styles.buttonContainer} {...props}>
      <HiArrowNarrowLeft size="1.4rem" />
    </button>
  );
}
