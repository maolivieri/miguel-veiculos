import { useContext, useState } from "react";
import { ButtonPrimary } from "../../../../design/ButtonPrimary";
import { IconAno } from "../../../../design/Icons";
import { RangeSlider } from "../../../../design/RangeSlider";
import styles from "./styles.module.scss";
import { SystemContext } from "../../../../context/systemContext";
import { ButtonSecondary } from "../../../../design/ButtonSecondary";
import { BiChevronLeft } from "react-icons/bi";

export function FilterAno() {
  const { activeFilters, setActiveFilters, setFocusedFilter, filterRanges } =
    useContext(SystemContext);
  const minRange = filterRanges.minYear!;
  const maxRange = new Date().getFullYear();
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
        <div className={styles.mainTitle}>
        <IconAno size="1.4rem" />
        <h3>Ano</h3>
        </div>
        <div className={styles.closeArrow} onClick={() => setFocusedFilter(null)}>
          <BiChevronLeft size="2rem" />
        </div>
      </div>
      <div className={styles.filterWrapper}>
        <div>
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
        </div>
        <div className={styles.buttonsWrapper}>
          <ButtonSecondary text="Limpar" onClick={clearPriceFilters} />
          <ButtonPrimary text="Confirmar" onClick={handleConfirmFilter} />
        </div>
      </div>
    </>
  );
}
