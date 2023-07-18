import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  alt?: boolean;
  text?: string;
  showText?: boolean;
}

export function IconButtonPrimary({
  icon,
  alt = false,
  showText = false,
  text = "",
  ...props
}: IconButtonProps) {
  const buttonStyling = `${styles.buttonContainer} ${alt && styles.alt} ${
    text && styles.text
  } ${
    showText && styles.showText
  }`;

  return (
    <button className={buttonStyling} {...props}>
      {icon}
      <span>{text}</span>
    </button>
  );
}
