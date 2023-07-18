import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: ReactNode;
}

export function ButtonSecondary({ text, ...props }: IconButtonProps) {
  const classNames = `${styles.buttonContainer} ${props.disabled && styles.buttonContainerDisabled}`

  return (
    <button className={classNames} {...props}>
      <p className={styles.buttonText}>{text}</p>
    </button>
  );
}
