import styles from "./styles.module.scss";

import { TbSearch } from "react-icons/tb";

interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function SearchInput({ ...props }: SearchInputProps) {
  return (
    <div className={styles.container}>
      <input placeholder="Buscar" className={styles.input} {...props} />
      <div className={styles.buttonContainer}>
        <TbSearch size="1.4rem" />
      </div>
    </div>
  );
}
