import styles from "./styles.module.scss";

import {
  IoGridOutline,
  IoOptions,
  IoSearch,
  IoListOutline,
} from "react-icons/io5";
import { BiFilterAlt, BiSortDown, BiSortUp } from "react-icons/bi";
import { useContext, useState } from "react";
import { countValidFilters } from "../../lib/countValidFilters";
import { SystemContext } from "../../context/systemContext";
import { UIContext } from "../../context/uiContext";

interface IProps {
  isSearchVisible: boolean;
  handleSortOpen: () => void;
  handleSearchOpen: () => void;
  openModals: boolean[];
}

export function HomeFloatingMenu({
  isSearchVisible,
  handleSearchOpen,
  handleSortOpen,
  openModals,
}: IProps) {
  const { setDisplay } = useContext(UIContext);
  const { activeFilters, toggleFilters, isFiltersOpen } = useContext(SystemContext);
  const countActiveFilters = countValidFilters(activeFilters);

  const [isActive, setIsActive] = useState(0);

  function handleListClick() {
    setIsActive((prevState) => (prevState === 0 ? 1 : 0));
    setDisplay((prevState) => (prevState === "grid" ? "list" : "grid"));
  }

  return (
    <div className={`${styles.container} ${!isSearchVisible && styles.hidden} ${isFiltersOpen && styles.openFilter}`}>
      <div className={styles.card}>
      <button
          onClick={toggleFilters}
          className={`${styles.iconButton} ${openModals[2] && styles.active}`}
        >
          {countActiveFilters > 0 && (
            <div className={styles.settingFlag}>{countActiveFilters}</div>
          )}
          <BiFilterAlt size="1.6rem" />
        </button>
        <button
          onClick={handleSortOpen}
          className={`${styles.iconButton} ${openModals[0] && styles.active}`}
        >
          <BiSortDown size="1.5rem" />
        </button>
        <button
          onClick={handleSearchOpen}
          className={`${styles.iconButton} ${openModals[1] && styles.active}`}
        >
          <IoSearch size="1.5rem" />
        </button>
        <button
          onClick={handleListClick}
          className={`${styles.iconButton} ${isActive === 1 && styles.active}`}
        >
          <IoListOutline size="1.5rem" />
        </button>
        <button
          onClick={handleListClick}
          className={`${styles.iconButton} ${isActive === 0 && styles.active}`}
        >
          <IoGridOutline size="1.5rem" />
        </button>
      </div>
    </div>
  );
}
