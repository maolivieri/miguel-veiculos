import styles from "./styles.module.scss";

import { Checkbox } from "../Checkbox";

interface IProps {
  checked: boolean;
  name: string;
  handleCheckboxChange: () => void;
  hex?: string;
  id?: string;
  ariaLabel?: string;
}

export function CheckboxFilter({
  checked,
  name,
  handleCheckboxChange,
  hex,
  id = "",
  ariaLabel = "",
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
        <div className={styles.checkboxWrapper}>
          <Checkbox id={id} aria-label={ariaLabel} large checked={checked} onChange={handleCheckboxChange} />
        </div>
      </div>
    </div>
  );
}
