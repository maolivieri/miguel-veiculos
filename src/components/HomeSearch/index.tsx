import styles from "./styles.module.scss";
import { SearchInput } from "../../design/SearchInput";
import { IconButtonSecondary } from "../../design/IconButtonSecondary";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { Dispatch, SetStateAction, useContext } from "react";
import { SystemContext } from "../../context/systemContext";
import { IconButtonPrimary } from "../../design/IconButtonPrimary";
import { countValidFilters } from "../../lib/countValidFilters";

interface IProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export function HomeSearch({ searchValue, setSearchValue }: IProps) {
  const { toggleFilters, activeFilters, isFiltersOpen } =
    useContext(SystemContext);

  const countActiveFilters = countValidFilters(activeFilters);

  return (
    <div
      className={`${styles.container} ${isFiltersOpen && styles.openDrawer}`}
    >
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className={styles.filterButton}>
        <IconButtonSecondary
          icon={<TbAdjustmentsHorizontal size="1.4rem" />}
          onClick={toggleFilters}
          text="Filtro"
          // alt
        />
        {!!countActiveFilters && (
          <div className={styles.buttonIndicator}>{countActiveFilters}</div>
        )}
      </div>
    </div>
  );
}
