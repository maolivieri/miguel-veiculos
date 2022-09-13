import { useContext, useState } from "react";
import { SystemContext } from "../../../../context/systemContext";
import { ButtonPrimary } from "../../../../design/ButtonPrimary";
import { ButtonSecondary } from "../../../../design/ButtonSecondary";
import { IconPreco } from "../../../../design/Icons";
import { RangeSlider } from "../../../../design/RangeSlider";
import { formatToCurrency } from "../../../../lib/formatToCurrency";
import styles from "./styles.module.scss";

export function FilterPreco() {
  const { activeFilters, setActiveFilters, setFocusedFilter } =
    useContext(SystemContext);
  const minRange = 10000;
  const maxRange = 200000;
  const [minValue, setMinValue] = useState(activeFilters.minPrice || minRange);
  const [maxValue, setMaxValue] = useState(activeFilters.maxPrice || maxRange);

  const handleConfirmFilter = () => {
    setActiveFilters((prevState) => ({
      ...prevState,
      minPrice: minValue,
      maxPrice: maxValue,
    }));
    setFocusedFilter(null);
  };

  const clearPriceFilters = () => {
    setMinValue(minRange);
    setMaxValue(maxRange);
    setActiveFilters((prevState) => ({
      ...prevState,
      minPrice: null,
      maxPrice: null,
    }));
  };

  return (
    <>
      <div className={styles.mainTitleWrapper}>
        <IconPreco size="1.4rem" />
        <h3>Preço</h3>
      </div>
      <div className={styles.filterWrapper}>
        <div className={styles.filterRange}>
          <div>
            <p>De</p>
            <h6>{formatToCurrency(minValue)}</h6>
          </div>
          <div>
            <p>Até</p>
            <h6>{formatToCurrency(maxValue)}</h6>
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
