import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: ReactNode;
}

export function ButtonSecondary({ text, ...props }: IconButtonProps) {
  return (
    <button className={styles.buttonContainer} {...props}>
      <p className={styles.buttonText}>{text}</p>
    </button>
  );
}
