import { useState, useRef, useContext, useEffect } from "react";
import styles from "./styles.module.scss";
import { BiSortDown, BiChevronDown } from "react-icons/bi";
import { SortOptions, SystemContext } from "../../context/systemContext";

export function SortCarsDropdown() {
  const { setListSort, listSort } = useContext(SystemContext);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Mais recentes");
  const selectRef = useRef<HTMLSelectElement>(null);

  const getSortName = (sort: SortOptions) => {
    switch (sort) {
      case "az":
        return "A - Z";
      case "menorpreco":
        return "Menor preço"  
      case "maiorpreco":
        return "Maior preço"  
      case "menorano":
        return "Ano mais novo"  
      case "menorkm":
        return "Menor KM"  
      default:
        return "Mais recentes";
    }
  }

  function handleOnClick(sort: SortOptions) {
    const name = getSortName(sort);
    setListSort(sort);
    setSelected(name);
  }

  useEffect(() => {
    console.log('aaaaaa')
    const name = getSortName(listSort);
    setSelected(name);
  }, [listSort])

 
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
          id="ga4_sort_recent"
          className={styles.item}
          onClick={() => {
            handleOnClick(null);
            setOpen((prevState) => !prevState);
          }}
        >
          <div className={`${listSort === null && styles.active}`} />
          <p>Mais recentes</p>
        </div>
        <div
          id="ga4_sort_az"
          className={styles.item}
          onClick={() => {
            handleOnClick("az");
            setOpen((prevState) => !prevState);
          }}
        >
          <div className={`${listSort === "az" && styles.active}`} />
          <p>A - Z</p>
        </div>
        <div
          id="ga4_sort_menorpreco"
          className={styles.item}
          onClick={() => {
            handleOnClick("menorpreco");
            setOpen((prevState) => !prevState);
          }}
        >
          <div className={`${listSort === "menorpreco" && styles.active}`} />
          <p>Menor preço</p>
        </div>
        <div
          id="ga4_sort_maiorpreco"
          className={styles.item}
          onClick={() => {
            handleOnClick("maiorpreco");
            setOpen((prevState) => !prevState);
          }}
        >
          <div className={`${listSort === "maiorpreco" && styles.active}`} />
          <p>Maior preço</p>
        </div>
        <div
          id="ga4_sort_menorano"
          className={styles.item}
          onClick={() => {
            handleOnClick("menorano");
            setOpen((prevState) => !prevState);
          }}
        >
          <div className={`${listSort === "menorano" && styles.active}`} />
          <p>Ano mais novo</p>
        </div>
        <div
          id="ga4_sort_menorkm"
          className={styles.item}
          onClick={() => {
            handleOnClick("menorkm");
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
