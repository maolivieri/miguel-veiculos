import { useContext, useState } from "react";
import { ListsContext } from "../../../../context/listsContext";
import { SystemContext } from "../../../../context/systemContext";
import { ButtonPrimary } from "../../../../design/ButtonPrimary";
import { ButtonSecondary } from "../../../../design/ButtonSecondary";
import { IconDocumentation } from "../../../../design/Icons";
import { FilterListCheckboxItem } from "../FilterListCheckboxItem";
import styles from "./styles.module.scss";

export function FilterDocumentacao() {
  const { activeFilters, setActiveFilters, setFocusedFilter } =
    useContext(SystemContext);

  const { documentacoes } = useContext(ListsContext);
  const [value, setValue] = useState(activeFilters.documentacoes);

  const handleConfirmFilter = () => {
    setActiveFilters((prevState) => ({
      ...prevState,
      documentacoes: value,
    }));
    setFocusedFilter(null);
  };

  const clearPriceFilters = () => {
    setValue([]);
    setActiveFilters((prevState) => ({
      ...prevState,
      documentacoes: [],
    }));
  };

  const handleCheckboxChange = (name: string) => {
    if (value.indexOf(name) === -1) {
      setValue((prevState) => [...prevState, name]);
    } else {
      setValue((prevState) => prevState.filter((state) => state !== name));
    }
  };

  return (
    <>
      <div className={styles.mainTitleWrapper}>
        <IconDocumentation size="1.4rem" />
        <h3>Documentação</h3>
      </div>
      <div className={styles.filterWrapper}>
        {documentacoes.map((documentacao) => (
          <FilterListCheckboxItem
            key={documentacao.nome}
            name={documentacao.nome}
            handleCheckboxChange={() => handleCheckboxChange(documentacao.nome)}
            checked={!!value.find((x) => x === documentacao.nome)}
          />
        ))}
      </div>
      <div className={styles.buttonsWrapper}>
        <ButtonPrimary text="Confirmar" onClick={handleConfirmFilter} />
        <ButtonSecondary text="Limpar" onClick={clearPriceFilters} />
      </div>
    </>
  );
}
