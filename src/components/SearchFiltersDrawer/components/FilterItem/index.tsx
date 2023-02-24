import { Dispatch, ReactNode, SetStateAction } from "react";
import { Filters } from "../../../../context/systemContext";
import { InputFilter } from "../InputFilter.tsx";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  icon: ReactNode;
  countSelected: number;
  children: ReactNode;
}

export function FilterItem({ title, icon, countSelected, children }: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        {icon}
        <h6>{title}</h6>
        {!!countSelected && <div className={styles.count}>{countSelected}</div>}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
