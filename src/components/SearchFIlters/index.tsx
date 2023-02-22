import { useContext } from "react";
import styles from "./styles.module.scss";
import { SystemContext } from "../../context/systemContext";
import { FiltersModal } from "../SearchFiltersModal";
import { FiltersDrawer } from "../SearchFiltersDrawer";

export function SearchFilters() {
  const { isFiltersOpen } = useContext(SystemContext);

  const containerClass = isFiltersOpen
    ? styles.openFilterContainer
    : styles.hiddenFilterContainer;

  return (
    <div className={containerClass}>
      <div className={styles.modal}>
        <FiltersModal />
      </div>
      <div className={styles.drawer}>
        <FiltersDrawer />
      </div>
    </div>
  );
}
