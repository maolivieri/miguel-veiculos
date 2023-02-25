import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  alt?: boolean;
}

export function IconButtonPrimary({
  icon,
  alt = false,
  ...props
}: IconButtonProps) {
  const buttonStyling = `${styles.buttonContainer} ${alt && styles.alt}`;

  return (
    <button className={buttonStyling} {...props}>
      {icon}
    </button>
  );
}
