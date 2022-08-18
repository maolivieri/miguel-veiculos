import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

export function IconButtonSecondary({ icon, ...props }: IconButtonProps) {
  return (
    <button className={styles.buttonContainer} {...props}>
      {icon}
    </button>
  );
}
