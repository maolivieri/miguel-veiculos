import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, toggleModal, children }: Props) {
  return (
    <div className={isOpen ? styles.openContainer : styles.hiddenContainer}>
      <div className={styles.dropShaddow} onClick={toggleModal} />
      {children}
    </div>
  );
}
