import styles from "./styles.module.scss";

import {
  IoGridOutline,
  IoOptions,
  IoSearch,
  IoListOutline,
} from "react-icons/io5";
import { BiSortDown, BiSortUp } from "react-icons/bi";
import { useState } from "react";

interface IProps {
  isSearchVisible: boolean;
}

export function HomeFloatingMenu({ isSearchVisible }: IProps) {
  const [isActive, setIsActive] = useState(0);
  const settingsActiveCount = 2;

  return (
    <div className={`${styles.container} ${!isSearchVisible && styles.hidden}`}>
      <div className={styles.card}>
        <button
          onClick={() => setIsActive(0)}
          className={`${styles.iconButton} ${isActive === 0 && styles.active}`}
        >
          <IoGridOutline size="1.5rem" />
        </button>
        <button
          onClick={() => setIsActive(1)}
          className={`${styles.iconButton} ${isActive === 1 && styles.active}`}
        >
          <IoListOutline size="1.5rem" />
        </button>
        <button
          onClick={() => setIsActive(2)}
          className={`${styles.iconButton} ${isActive === 2 && styles.active}`}
        >
          <BiSortDown size="1.5rem" />
        </button>
        <button
          onClick={() => setIsActive(3)}
          className={`${styles.iconButton} ${isActive === 3 && styles.active}`}
        >
          <IoSearch size="1.5rem" />
        </button>
        <button
          onClick={() => setIsActive(4)}
          className={`${styles.iconButton} ${isActive === 4 && styles.active}`}
        >
          {settingsActiveCount > 0 && (
            <div className={styles.settingFlag}>{settingsActiveCount}</div>
          )}
          <IoOptions size="1.6rem" />
        </button>
      </div>
    </div>
  );
}
