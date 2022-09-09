import { ReactNode } from "react";
import { MdAdd } from "react-icons/md";
import styles from "./styles.module.scss";

interface IProps {
  icon: ReactNode;
  title: string;
  total: number;
}

export function FilterItem({ icon, title, total }: IProps) {
  return (
    <div className={styles.filterItemContainer}>
      <div className={styles.row}>
        <div className={styles.icon}>{icon}</div>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.row}>
        {total > 0 && (
          <div className={styles.total}>
            <p>{total}</p>
          </div>
        )}
        <div className={styles.add}>
          <MdAdd size="1.5rem" />
        </div>
      </div>
    </div>
  );
}
