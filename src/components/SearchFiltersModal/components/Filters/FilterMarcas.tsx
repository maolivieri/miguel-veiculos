import { useContext, useState } from "react";
import { ListsContext } from "../../../../context/listsContext";
import { SystemContext } from "../../../../context/systemContext";
import { ButtonPrimary } from "../../../../design/ButtonPrimary";
import { ButtonSecondary } from "../../../../design/ButtonSecondary";
import { IconMarca } from "../../../../design/Icons";
import { CheckboxFilter } from "../../../../design/CheckboxFilter";
import styles from "./styles.module.scss";
import { BiChevronLeft } from "react-icons/bi";

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

  const isButtonDisabled = (!value?.length)

  return (
    <>
      <div className={styles.mainTitleWrapper}>
      <div className={styles.mainTitle}>
        <IconMarca size="1.4rem" />
        <h3>Marcas</h3>
        </div>
        <div className={styles.closeArrow} onClick={() => setFocusedFilter(null)}>
          <BiChevronLeft size="2rem" />
        </div>
      </div>
      <div className={styles.filterWrapper}>
        <div>
        {marcas.map((marca) => (
          <CheckboxFilter
            id="ga4_click_filter_marca"
            ariaLabel={marca.nome}
            key={marca.nome}
            name={marca.nome}
            handleCheckboxChange={() => handleCheckboxChange(marca.nome)}
            checked={!!value.find((x) => x === marca.nome)}
          />
        ))}
      </div>
      </div>
      <div className={styles.buttonsWrapper}>
        <ButtonSecondary text="Limpar" onClick={clearPriceFilters} disabled={isButtonDisabled}  />
        <ButtonPrimary text="Aplicar" onClick={handleConfirmFilter} disabled={isButtonDisabled}  />
      </div>
    </>
  );
}
