import { useContext } from "react";
import { BiChevronDown } from "react-icons/bi";
import { SystemContext, SortOptions } from "../../context/systemContext";
import styles from "./styles.module.scss";

interface Props {
  toggleFilters: () => void;
}

export function SortCarsList({ toggleFilters }: Props) {
  const { setListSort, listSort } = useContext(SystemContext);

  function handleOnClick(sort: SortOptions) {
    setListSort(sort);
  }

  return (
    <div className={styles.box}>
      <div className={styles.closeArrow} onClick={toggleFilters}>
        <BiChevronDown size="2.3rem" />
      </div>
      <h4 className={styles.title}>Ordem de exibição</h4>
      <div className={styles.main}>
        <div className={styles.item} onClick={() => handleOnClick(null)}>
          <div className={`${listSort === null && styles.active}`} />
          <p>Adicionados recentemente</p>
        </div>
        <div className={styles.item} onClick={() => handleOnClick("az")}>
          <div className={`${listSort === "az" && styles.active}`} />
          <p>Ordem alfabética</p>
        </div>
        <div
          className={styles.item}
          onClick={() => handleOnClick("menorpreco")}
        >
          <div className={`${listSort === "menorpreco" && styles.active}`} />
          <p>Menor preço</p>
        </div>
        <div
          className={styles.item}
          onClick={() => handleOnClick("maiorpreco")}
        >
          <div className={`${listSort === "maiorpreco" && styles.active}`} />
          <p>Maior preço</p>
        </div>
        <div className={styles.item} onClick={() => handleOnClick("menorano")}>
          <div className={`${listSort === "menorano" && styles.active}`} />
          <p>Ano mais novo</p>
        </div>
        <div className={styles.item} onClick={() => handleOnClick("menorkm")}>
          <div className={`${listSort === "menorkm" && styles.active}`} />
          <p>Mais novo</p>
        </div>
      </div>
    </div>
  );
}
