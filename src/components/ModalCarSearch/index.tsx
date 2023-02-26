import { Dispatch, SetStateAction, useContext } from "react";
import { BiChevronDown } from "react-icons/bi";
import { SystemContext, SortOptions } from "../../context/systemContext";
import { SearchInput } from "../../design/SearchInput";
import styles from "./styles.module.scss";

interface Props {
  toggleModal: () => void;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export function ModalCarSearch({
  toggleModal,
  searchValue,
  setSearchValue,
}: Props) {
  return (
    <div className={styles.box}>
      <div className={styles.closeArrow} onClick={toggleModal}>
        <BiChevronDown size="2.3rem" />
      </div>
      <h4 className={styles.title}>Digite uma palavra chave</h4>
      <div className={styles.main}>
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
    </div>
  );
}
