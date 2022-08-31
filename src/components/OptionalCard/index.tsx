import styles from "./styles.module.scss";
import { ReactNode } from "react";

interface IProps {
  icon: ReactNode;
  title: string;
  list: string[];
}

export function OptionalCard({ icon, list, title }: IProps) {
  return (
    <div className={styles.card}>
      {icon}
      <h4>{title}</h4>
      <ul>
        {list.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
    </div>
  );
}
