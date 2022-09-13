import { useContext, useState } from "react";
import { ListsContext } from "../../../../context/listsContext";
import { SystemContext } from "../../../../context/systemContext";
import { ButtonPrimary } from "../../../../design/ButtonPrimary";
import { ButtonSecondary } from "../../../../design/ButtonSecondary";
import { IconCor } from "../../../../design/Icons";
import { FilterListCheckboxItem } from "../FilterListCheckboxItem";
import styles from "./styles.module.scss";

export function FilterCor() {
  const { activeFilters, setActiveFilters, setFocusedFilter } =
    useContext(SystemContext);

  const { cors } = useContext(ListsContext);
  const [value, setValue] = useState(activeFilters.cores);

  const handleConfirmFilter = () => {
    setActiveFilters((prevState) => ({
      ...prevState,
      cores: value,
    }));
    setFocusedFilter(null);
  };

  const clearFilters = () => {
    setValue([]);
    setActiveFilters((prevState) => ({
      ...prevState,
      cores: [],
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
        <IconCor size="1.4rem" />
        <h3>Cor</h3>
      </div>
      <div className={styles.filterWrapper}>
        {cors.map((cor) => (
          <FilterListCheckboxItem
            key={cor.nome}
            name={cor.nome}
            hex={cor.cor.hex}
            handleCheckboxChange={() => handleCheckboxChange(cor.nome)}
            checked={!!value.find((x) => x === cor.nome)}
          />
        ))}
      </div>
      <div className={styles.buttonsWrapper}>
        <ButtonPrimary text="Confirmar" onClick={handleConfirmFilter} />
        <ButtonSecondary text="Limpar" onClick={clearFilters} />
      </div>
    </>
  );
}
