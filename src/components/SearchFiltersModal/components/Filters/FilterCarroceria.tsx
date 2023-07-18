import { useContext, useState } from "react";
import { ListsContext } from "../../../../context/listsContext";
import { SystemContext } from "../../../../context/systemContext";
import { ButtonPrimary } from "../../../../design/ButtonPrimary";
import { ButtonSecondary } from "../../../../design/ButtonSecondary";
import { IconCarroceria } from "../../../../design/Icons";
import { CheckboxFilter } from "../../../../design/CheckboxFilter";
import styles from "./styles.module.scss";
import { BiChevronLeft } from "react-icons/bi";

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

  const isButtonDisabled = (!value?.length)

  return (
    <>
      <div className={styles.mainTitleWrapper}>
      <div className={styles.mainTitle}>
        <IconCarroceria size="1.4rem" />
        <h3>Carroceria</h3>
        </div>
        <div className={styles.closeArrow} onClick={() => setFocusedFilter(null)}>
          <BiChevronLeft size="2rem" />
        </div>
      </div>
      <div className={styles.filterWrapper}>
        <div>
        {carrocerias.map((carroceria) => (
          <CheckboxFilter
            key={carroceria.nome}
            name={carroceria.nome}
            handleCheckboxChange={() => handleCheckboxChange(carroceria.nome)}
            checked={!!value.find((x) => x === carroceria.nome)}
          />
        ))}
      </div>
      </div>
      <div className={styles.buttonsWrapper}>
        <ButtonSecondary text="Limpar" onClick={clearPriceFilters} disabled={isButtonDisabled} />
        <ButtonPrimary text="Aplicar" onClick={handleConfirmFilter} disabled={isButtonDisabled} />
      </div>
    </>
  );
}
