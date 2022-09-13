import { useContext, useState } from "react";
import { ListsContext } from "../../../../context/listsContext";
import { SystemContext } from "../../../../context/systemContext";
import { ButtonPrimary } from "../../../../design/ButtonPrimary";
import { ButtonSecondary } from "../../../../design/ButtonSecondary";
import { IconCarroceria } from "../../../../design/Icons";
import { FilterListCheckboxItem } from "../FilterListCheckboxItem";
import styles from "./styles.module.scss";

export function FilterCarroceria() {
  const { activeFilters, setActiveFilters, setFocusedFilter } =
    useContext(SystemContext);

  const { carrocerias } = useContext(ListsContext);
  const [value, setValue] = useState(activeFilters.carrocerias);

  const handleConfirmFilter = () => {
    setActiveFilters((prevState) => ({
      ...prevState,
      carrocerias: value,
    }));
    setFocusedFilter(null);
  };

  const clearPriceFilters = () => {
    setValue([]);
    setActiveFilters((prevState) => ({
      ...prevState,
      carrocerias: [],
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
        <IconCarroceria size="1.4rem" />
        <h3>Carroceria</h3>
      </div>
      <div className={styles.filterWrapper}>
        {carrocerias.map((carroceria) => (
          <FilterListCheckboxItem
            key={carroceria.nome}
            name={carroceria.nome}
            handleCheckboxChange={() => handleCheckboxChange(carroceria.nome)}
            checked={!!value.find((x) => x === carroceria.nome)}
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
