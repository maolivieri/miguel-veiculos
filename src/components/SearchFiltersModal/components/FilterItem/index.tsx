import { ReactNode, useContext } from "react";
import { MdAdd, MdCheck } from "react-icons/md";
import {
  FilterOptions,
  SystemContext,
} from "../../../../context/systemContext";
import styles from "./styles.module.scss";

interface IProps {
  icon: ReactNode;
  title: string;
  total: number | string | null;
  filter: FilterOptions;
}

export function FilterItem({ icon, title, total, filter }: IProps) {
  const { focusedFilter, setFocusedFilter } = useContext(SystemContext);

  const handleAddClick = () => {
    if (focusedFilter !== filter) {
      setFocusedFilter(filter);
    } else {
      setFocusedFilter(null);
    }
  };

  return (
    <div className={styles.filterItemContainer} onClick={handleAddClick}>
      <div className={styles.row}>
        <div className={styles.icon}>{icon}</div>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.row}>
        {!!total && (
          <div className={styles.total}>
            {total === "active" ? <MdCheck color="#FFFFFF" /> : <p>{total}</p>}
          </div>
        )}
        <div className={styles.add} onClick={handleAddClick}>
          <MdAdd size="1.5rem" />
        </div>
      </div>
    </div>
  );
}
