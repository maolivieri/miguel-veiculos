import { Dispatch, SetStateAction, useContext } from "react";
import { BiChevronDown } from "react-icons/bi";
import { SystemContext, SortOptions } from "../../context/systemContext";
import { SearchInput } from "../../design/SearchInput";
import styles from "./styles.module.scss";
import { HiX } from "react-icons/hi";

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
      {/* <div className={styles.closeArrow} onClick={toggleModal}>
        <BiChevronDown size="2.3rem" />
      </div> */}
      <div  className={styles.header}>
        <h3 className={styles.title}>Busca</h3>
        <div className={styles.closeArrow} onClick={toggleModal}>
          <HiX size="1.5rem" />
        </div>
      </div>
      <div className={styles.main}>
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
    </div>
  );
}
