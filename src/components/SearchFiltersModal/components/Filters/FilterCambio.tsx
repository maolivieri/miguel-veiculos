import { useContext, useState } from "react";
import { ListsContext } from "../../../../context/listsContext";
import { SystemContext } from "../../../../context/systemContext";
import { ButtonPrimary } from "../../../../design/ButtonPrimary";
import { ButtonSecondary } from "../../../../design/ButtonSecondary";
import { IconCambio } from "../../../../design/Icons";
import { CheckboxFilter } from "../../../../design/CheckboxFilter";
import styles from "./styles.module.scss";

export function FilterCambio() {
  const { activeFilters, setActiveFilters, setFocusedFilter } =
    useContext(SystemContext);

  const { cambios } = useContext(ListsContext);
  const [value, setValue] = useState(activeFilters.cambios);

  const handleConfirmFilter = () => {
    setActiveFilters((prevState) => ({
      ...prevState,
      cambios: value,
    }));
    setFocusedFilter(null);
  };

  const clearPriceFilters = () => {
    setValue([]);
    setActiveFilters((prevState) => ({
      ...prevState,
      cambios: [],
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
        <IconCambio size="1.4rem" />
        <h3>Câmbio</h3>
      </div>
      <div className={styles.filterWrapper}>
        {cambios.map((cambio) => (
          <CheckboxFilter
            key={cambio.nome}
            name={cambio.nome}
            handleCheckboxChange={() => handleCheckboxChange(cambio.nome)}
            checked={!!value.find((x) => x === cambio.nome)}
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
