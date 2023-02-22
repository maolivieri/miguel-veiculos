import { useContext, useState } from "react";
import { ListsContext } from "../../../../context/listsContext";
import { SystemContext } from "../../../../context/systemContext";
import { ButtonPrimary } from "../../../../design/ButtonPrimary";
import { ButtonSecondary } from "../../../../design/ButtonSecondary";
import { IconCombustivel } from "../../../../design/Icons";
import { CheckboxFilter } from "../../../../design/CheckboxFilter";
import styles from "./styles.module.scss";

export function FilterCombustivel() {
  const { activeFilters, setActiveFilters, setFocusedFilter } =
    useContext(SystemContext);

  const { combustivels } = useContext(ListsContext);
  const [value, setValue] = useState(activeFilters.combustiveis);

  const handleConfirmFilter = () => {
    setActiveFilters((prevState) => ({
      ...prevState,
      combustiveis: value,
    }));
    setFocusedFilter(null);
  };

  const clearPriceFilters = () => {
    setValue([]);
    setActiveFilters((prevState) => ({
      ...prevState,
      combustiveis: [],
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
        <IconCombustivel size="1.4rem" />
        <h3>Combustível</h3>
      </div>
      <div className={styles.filterWrapper}>
        {combustivels.map((combustivel) => (
          <CheckboxFilter
            key={combustivel.nome}
            name={combustivel.nome}
            handleCheckboxChange={() => handleCheckboxChange(combustivel.nome)}
            checked={!!value.find((x) => x === combustivel.nome)}
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
