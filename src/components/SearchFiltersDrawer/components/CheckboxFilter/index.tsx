import styles from "./styles.module.scss";
import { Checkbox } from "../../../../design/Checkbox";

interface IProps {
  items: string[];
  title?: string | null;
}

export function CheckboxFilter({ items, title = null }: IProps) {
  function handleSelection() {
    console.log("set checkbox");
  }

  return (
    <div className={styles.box}>
      {!!title && <p className={styles.title}>{title}</p>}
      {items.map((item) => (
        <div key={item} className={styles.checkbox}>
          <div>
            <Checkbox checked={false} onChange={handleSelection} />
          </div>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}
