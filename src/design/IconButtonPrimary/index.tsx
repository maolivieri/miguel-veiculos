import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  alt?: boolean;
  text?: string;
}

export function IconButtonPrimary({
  icon,
  alt = false,
  text = "",
  ...props
}: IconButtonProps) {
  const buttonStyling = `${styles.buttonContainer} ${alt && styles.alt} ${
    !!text && styles.text
  }`;

  return (
    <button className={buttonStyling} {...props}>
      {icon}
      {text}
    </button>
  );
}
