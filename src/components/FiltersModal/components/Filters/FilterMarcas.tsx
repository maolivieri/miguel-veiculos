import { useContext, useState } from "react";
import { ListsContext } from "../../../../context/listsContext";
import { SystemContext } from "../../../../context/systemContext";
import { ButtonPrimary } from "../../../../design/ButtonPrimary";
import { ButtonSecondary } from "../../../../design/ButtonSecondary";
import { IconMarca } from "../../../../design/Icons";
import { FilterListCheckboxItem } from "../FilterListCheckboxItem";
import styles from "./styles.module.scss";

export function FilterMarcas() {
  const { activeFilters, setActiveFilters, setFocusedFilter } =
    useContext(SystemContext);

  const { marcas } = useContext(ListsContext);
  const [value, setValue] = useState(activeFilters.marcas);

  const handleConfirmFilter = () => {
    setActiveFilters((prevState) => ({
      ...prevState,
      marcas: value,
    }));
    setFocusedFilter(null);
  };

  const clearPriceFilters = () => {
    setValue([]);
    setActiveFilters((prevState) => ({
      ...prevState,
      marcas: [],
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
        <IconMarca size="1.4rem" />
        <h3>Marcas</h3>
      </div>
      <div className={styles.filterWrapper}>
        {marcas.map((marca) => (
          <FilterListCheckboxItem
            key={marca.nome}
            name={marca.nome}
            handleCheckboxChange={() => handleCheckboxChange(marca.nome)}
            checked={!!value.find((x) => x === marca.nome)}
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
