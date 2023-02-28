import { useState, useRef, useContext } from "react";
import styles from "./styles.module.scss";
import { BiSortDown, BiChevronDown } from "react-icons/bi";
import { SortOptions, SystemContext } from "../../context/systemContext";

export function SortCarsDropdown() {
  const { setListSort, listSort } = useContext(SystemContext);
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Mais recentes");
  const selectRef = useRef<HTMLSelectElement>(null);

  function handleOnClick(sort: SortOptions, name: string) {
    setListSort(sort);
    setSelected(name);
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.selectContainer}
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <BiSortDown size="1.5rem" />
        <p className={styles.select}>{selected}</p>
        <BiChevronDown
          size="1.5rem"
          onClick={(e) => selectRef.current?.focus}
          className={styles.iconDown}
        />
      </div>
      <div className={`${styles.popup} ${!open && styles.hidden}`}>
        <div
          className={styles.item}
          onClick={() => {
            handleOnClick(null, "Mais recentes");
            setOpen((prevState) => !prevState);
          }}
        >
          <div className={`${listSort === null && styles.active}`} />
          <p>Mais recentes</p>
        </div>
        <div
          className={styles.item}
          onClick={() => {
            handleOnClick("az", "A - Z");
            setOpen((prevState) => !prevState);
          }}
        >
          <div className={`${listSort === "az" && styles.active}`} />
          <p>A - Z</p>
        </div>
        <div
          className={styles.item}
          onClick={() => {
            handleOnClick("menorpreco", "Menor preço");
            setOpen((prevState) => !prevState);
          }}
        >
          <div className={`${listSort === "menorpreco" && styles.active}`} />
          <p>Menor preço</p>
        </div>
        <div
          className={styles.item}
          onClick={() => {
            handleOnClick("maiorpreco", "Maior preço");
            setOpen((prevState) => !prevState);
          }}
        >
          <div className={`${listSort === "maiorpreco" && styles.active}`} />
          <p>Maior preço</p>
        </div>
        <div
          className={styles.item}
          onClick={() => {
            handleOnClick("menorano", "Ano mais novo");
            setOpen((prevState) => !prevState);
          }}
        >
          <div className={`${listSort === "menorano" && styles.active}`} />
          <p>Ano mais novo</p>
        </div>
        <div
          className={styles.item}
          onClick={() => {
            handleOnClick("menorkm", "Menor KM");
            setOpen((prevState) => !prevState);
          }}
        >
          <div className={`${listSort === "menorkm" && styles.active}`} />
          <p>Menor KM</p>
        </div>
      </div>
    </div>
  );
}
