import styles from "./styles.module.scss";

import { TbSearch } from "react-icons/tb";
import { Dispatch, SetStateAction } from "react";
import { MdClear } from "react-icons/md";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export function SearchInput({
  searchValue,
  setSearchValue,
  ...props
}: SearchInputProps) {
  return (
    <div className={styles.container}>
      <input
        placeholder="Buscar"
        className={styles.input}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        {...props}
      />
      {!!searchValue && (
        <div className={styles.clearButton} onClick={() => setSearchValue("")}>
          <MdClear size="1.2rem" />
        </div>
      )}
      <div className={styles.buttonContainer}>
        <TbSearch size="1.4rem" />
      </div>
    </div>
  );
}
