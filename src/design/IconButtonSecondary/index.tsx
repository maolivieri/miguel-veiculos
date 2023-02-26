import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  text: string;
}

export function IconButtonSecondary({
  icon,
  text = "",
  ...props
}: IconButtonProps) {
  return (
    <button
      className={`${styles.buttonContainer} ${!!text && styles.text}`}
      {...props}
    >
      {icon}
      {text}
    </button>
  );
}
