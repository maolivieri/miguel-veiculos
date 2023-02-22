import { useContext, useState } from "react";
import { ButtonPrimary } from "../../../../design/ButtonPrimary";
import { IconAno } from "../../../../design/Icons";
import { RangeSlider } from "../../../../design/RangeSlider";
import styles from "./styles.module.scss";
import { SystemContext } from "../../../../context/systemContext";
import { ButtonSecondary } from "../../../../design/ButtonSecondary";

export function FilterAno() {
  const { activeFilters, setActiveFilters, setFocusedFilter } =
    useContext(SystemContext);
  const minRange = 1970;
  // const maxRange = new Date().getFullYear();
  const maxRange = 2023;
  const [minValue, setMinValue] = useState(activeFilters.startYear || minRange);
  const [maxValue, setMaxValue] = useState(activeFilters.endYear || maxRange);

  const handleConfirmFilter = () => {
    setActiveFilters((prevState) => ({
      ...prevState,
      startYear: minValue,
      endYear: maxValue,
    }));
    setFocusedFilter(null);
  };

  const clearPriceFilters = () => {
    setMinValue(minRange);
    setMaxValue(maxRange);
    setActiveFilters((prevState) => ({
      ...prevState,
      startYear: null,
      endYear: null,
    }));
  };

  return (
    <>
      <div className={styles.mainTitleWrapper}>
        <IconAno size="1.4rem" />
        <h3>Ano</h3>
      </div>
      <div className={styles.filterWrapper}>
        <div className={styles.filterRange}>
          <div>
            <p>De</p>
            <h6>{minValue}</h6>
          </div>
          <div>
            <p>Até</p>
            <h6>{maxValue}</h6>
          </div>
        </div>
        <RangeSlider
          minRange={minRange}
          maxRange={maxRange}
          minValue={minValue}
          maxValue={maxValue}
          setMinValue={setMinValue}
          setMaxValue={setMaxValue}
        />
        <div className={styles.buttonsWrapper}>
          <ButtonPrimary text="Confirmar" onClick={handleConfirmFilter} />
          <ButtonSecondary text="Limpar" onClick={clearPriceFilters} />
        </div>
      </div>
    </>
  );
}
