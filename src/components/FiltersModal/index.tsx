import { useContext } from "react";
import { SystemContext } from "../../context/systemContext";
import styles from "./styles.module.scss";

export function FiltersModal() {
  const { isFiltersOpen } = useContext(SystemContext);

  return (
    <div
      className={
        isFiltersOpen ? styles.filtersModalContainer : styles.hiddenModal
      }
    ></div>
  );
}
