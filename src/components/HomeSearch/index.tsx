import styles from "./styles.module.scss";
import { SearchInput } from "../../design/SearchInput";
import { IconButtonSecondary } from "../../design/IconButtonSecondary";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { Dispatch, SetStateAction, useContext } from "react";
import { SystemContext } from "../../context/systemContext";

interface IProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export function HomeSearch({ searchValue, setSearchValue }: IProps) {
  const { toggleFilters } = useContext(SystemContext);

  return (
    <div className={styles.container}>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <IconButtonSecondary
        icon={<TbAdjustmentsHorizontal size="1.4rem" />}
        onClick={toggleFilters}
      />
    </div>
  );
}
