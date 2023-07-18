import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: ReactNode;
  size?: 'large' | 'small'
}

export function ButtonBrand({ text, size = 'small', ...props }: IconButtonProps) {
  return (
    <button className={`${styles.buttonContainer} ${size === 'large' && styles.large }`} {...props}>
      <p className={styles.buttonText}>{text}</p>
    </button>
  );
}
