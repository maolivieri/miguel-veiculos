import { useContext, useState } from "react";
import { ListsContext } from "../../../../context/listsContext";
import { SystemContext } from "../../../../context/systemContext";
import { ButtonPrimary } from "../../../../design/ButtonPrimary";
import { ButtonSecondary } from "../../../../design/ButtonSecondary";
import { IconCor } from "../../../../design/Icons";
import { CheckboxFilter } from "../../../../design/CheckboxFilter";
import styles from "./styles.module.scss";
import { BiChevronLeft } from "react-icons/bi";

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
      <div className={styles.mainTitle}>
        <IconCor size="1.4rem" />
        <h3>Cor</h3>
        </div>
        <div className={styles.closeArrow} onClick={() => setFocusedFilter(null)}>
          <BiChevronLeft size="2rem" />
        </div>
      </div>
      <div className={styles.filterWrapper}>
        <div>
        {cors.map((cor) => (
          <CheckboxFilter
            key={cor.nome}
            name={cor.nome}
            hex={cor.cor.hex}
            handleCheckboxChange={() => handleCheckboxChange(cor.nome)}
            checked={!!value.find((x) => x === cor.nome)}
          />
        ))}
      </div>
      </div>
      <div className={styles.buttonsWrapper}>
        <ButtonSecondary text="Limpar" onClick={clearFilters} />
        <ButtonPrimary text="Aplicar" onClick={handleConfirmFilter} />
      </div>
    </>
  );
}
