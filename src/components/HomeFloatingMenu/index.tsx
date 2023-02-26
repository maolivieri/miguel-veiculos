import styles from "./styles.module.scss";

import {
  IoGridOutline,
  IoOptions,
  IoSearch,
  IoListOutline,
} from "react-icons/io5";
import { BiSortDown, BiSortUp } from "react-icons/bi";
import { useContext, useState } from "react";
import { countValidFilters } from "../../lib/countValidFilters";
import { SystemContext } from "../../context/systemContext";
import { UIContext } from "../../context/uiContext";

interface IProps {
  isSearchVisible: boolean;
  handleSortOpen: () => void;
  handleSearchOpen: () => void;
}

export function HomeFloatingMenu({
  isSearchVisible,
  handleSearchOpen,
  handleSortOpen,
}: IProps) {
  const { setDisplay } = useContext(UIContext);
  const { activeFilters, toggleFilters } = useContext(SystemContext);
  const countActiveFilters = countValidFilters(activeFilters);

  const [isActive, setIsActive] = useState(0);

  return (
    <div className={`${styles.container} ${!isSearchVisible && styles.hidden}`}>
      <div className={styles.card}>
        <button
          onClick={() => {
            setIsActive(0);
            setDisplay("grid");
          }}
          className={`${styles.iconButton} ${isActive === 0 && styles.active}`}
        >
          <IoGridOutline size="1.5rem" />
        </button>
        <button
          onClick={() => {
            setIsActive(1);
            setDisplay("list");
          }}
          className={`${styles.iconButton} ${isActive === 1 && styles.active}`}
        >
          <IoListOutline size="1.5rem" />
        </button>
        <button
          onClick={handleSortOpen}
          className={`${styles.iconButton} ${isActive === 2 && styles.active}`}
        >
          <BiSortDown size="1.5rem" />
        </button>
        <button
          onClick={handleSearchOpen}
          className={`${styles.iconButton} ${isActive === 3 && styles.active}`}
        >
          <IoSearch size="1.5rem" />
        </button>
        <button
          onClick={toggleFilters}
          className={`${styles.iconButton} ${isActive === 4 && styles.active}`}
        >
          {countActiveFilters > 0 && (
            <div className={styles.settingFlag}>{countActiveFilters}</div>
          )}
          <IoOptions size="1.6rem" />
        </button>
      </div>
    </div>
  );
}
