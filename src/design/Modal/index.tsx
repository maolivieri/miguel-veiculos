import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  isOpen: boolean;
  isFilterOpen: boolean;
  toggleModal: () => void;
  children: ReactNode;
  isSearchVisible: boolean;
}

export function Modal({ isOpen, toggleModal, children, isFilterOpen, isSearchVisible }: Props) {
  return (
    <div className={`${(isOpen && isSearchVisible) ? styles.openContainer : styles.hiddenContainer} ${isFilterOpen && styles.openContainerWfilterOpen}`}>
      <div className={styles.dropShaddow} onClick={toggleModal} />
      {children}
    </div>
  );
}
