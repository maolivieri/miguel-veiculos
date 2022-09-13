import styles from "./styles.module.scss";

import { Checkbox } from "../../../../design/Checkbox";

interface IProps {
  checked: boolean;
  name: string;
  handleCheckboxChange: () => void;
}

export function FilterListCheckboxItem({
  checked,
  name,
  handleCheckboxChange,
}: IProps) {
  return (
    <div className={styles.listItemContainer}>
      <p className={styles.name} onClick={handleCheckboxChange}>
        {name}
      </p>
      <div className={styles.row}>
        {/* <p className={styles.count}>8</p> */}
        <div className={styles.checkboxWrapper}>
          <Checkbox checked={checked} onChange={handleCheckboxChange} />
        </div>
      </div>
    </div>
  );
}
