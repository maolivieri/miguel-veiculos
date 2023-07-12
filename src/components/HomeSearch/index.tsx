import styles from "./styles.module.scss";
import { SearchInput } from "../../design/SearchInput";
import { IconButtonSecondary } from "../../design/IconButtonSecondary";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { Dispatch, SetStateAction, useContext } from "react";
import { SystemContext } from "../../context/systemContext";
import { IconButtonPrimary } from "../../design/IconButtonPrimary";
import { countValidFilters } from "../../lib/countValidFilters";
import { SortCarsDropdown } from "../SortCarsDropdown";

interface IProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export function HomeSearch({ searchValue, setSearchValue }: IProps) {
  const { toggleFilters, activeFilters, isFiltersOpen } =
    useContext(SystemContext);

  const countActiveFilters = countValidFilters(activeFilters);

  return (
    <div className={`${styles.box} ${isFiltersOpen && styles.openDrawerBox}`}>
      <div
        className={`${styles.container} ${isFiltersOpen && styles.openDrawer}`}
      >
        <div className={styles.filterButton}>
          <IconButtonPrimary
            icon={<TbAdjustmentsHorizontal size="1.4rem" />}
            onClick={toggleFilters}
            text="Filtro"
          />
          {!!countActiveFilters && (
            <div className={styles.buttonIndicator}>{countActiveFilters}</div>
          )}
        </div>
        <SortCarsDropdown />
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
    </div>
  );
}
