import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface IProps {
  icon: ReactNode;
  title: string;
  value: string;
}

export function CarDetailSpecCard({ icon, title, value }: IProps) {
  return (
    <div className={styles.card}>
      <div>
        {icon}
        <h6>{title}</h6>
      </div>
      <p>{value}</p>
    </div>
  );
}
