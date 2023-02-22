import styles from "./styles.module.scss";

import { Checkbox } from "../Checkbox";

interface IProps {
  checked: boolean;
  name: string;
  handleCheckboxChange: () => void;
  hex?: string;
}

export function CheckboxFilter({
  checked,
  name,
  handleCheckboxChange,
  hex,
}: IProps) {
  return (
    <div className={styles.listItemContainer}>
      <div className={styles.rowColour}>
        {hex && (
          <div className={styles.hexColourBox} style={{ background: hex }} />
        )}
        <p className={styles.name} onClick={handleCheckboxChange}>
          {name}
        </p>
      </div>
      <div className={styles.row}>
        {/* <p className={styles.count}>8</p> */}
        <div className={styles.checkboxWrapper}>
          <Checkbox checked={checked} onChange={handleCheckboxChange} />
        </div>
      </div>
    </div>
  );
}
