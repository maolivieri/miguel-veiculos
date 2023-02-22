import { useContext, useEffect, useState } from "react";
import {
  initialFiltersValue,
  SystemContext,
} from "../../context/systemContext";
import { CloseButton } from "../../design/CloseButton";
import { countValidFilters } from "../../lib/countValidFilters";
import { FilterItem } from "./components/FilterItem";
import styles from "./styles.module.scss";

export function FiltersDrawer() {
  const { toggleFilters, setActiveFilters, activeFilters } =
    useContext(SystemContext);

  const countActiveFilters = countValidFilters(activeFilters);

  return (
    <div>
      <div className={styles.closeButton} onClick={toggleFilters}>
        <CloseButton />
      </div>
      <div className={styles.header}>
        <h6>{`Filtros (${countActiveFilters})`}</h6>
        <p onClick={() => setActiveFilters(initialFiltersValue)}>
          Limpar Filtros
        </p>
      </div>
      <div className={styles.line} />
      <FilterItem />
      <FilterItem />
      <FilterItem />
      <FilterItem />
      <FilterItem />
      <FilterItem />
      <FilterItem />
    </div>
  );
}
