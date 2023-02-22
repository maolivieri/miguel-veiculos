import { useContext } from "react";
import { SystemContext } from "../../../../context/systemContext";
import { SetFocusedFilterComponent } from "./setFocusedFilterComponent";
import styles from "./styles.module.scss";

export function FilterWrapper() {
  const { focusedFilter, setFocusedFilter } = useContext(SystemContext);
  return (
    <div
      className={
        !!focusedFilter ? styles.filtersModalContainer : styles.hiddenModal
      }
    >
      <div
        className={styles.dropShaddow}
        onClick={() => setFocusedFilter(null)}
      />
      <div className={styles.main}>
        {SetFocusedFilterComponent(focusedFilter)}
      </div>
    </div>
  );
}
