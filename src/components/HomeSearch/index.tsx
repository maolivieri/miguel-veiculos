import styles from "./styles.module.scss";
import { SearchInput } from "../../design/SearchInput";
import { IconButtonSecondary } from "../../design/IconButtonSecondary";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export function HomeSearch({ searchValue, setSearchValue }: IProps) {
  return (
    <div className={styles.container}>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <IconButtonSecondary icon={<TbAdjustmentsHorizontal size="1.4rem" />} />
    </div>
  );
}
