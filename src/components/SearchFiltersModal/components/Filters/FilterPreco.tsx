import { useContext, useState } from "react";
import { SystemContext } from "../../../../context/systemContext";
import { ButtonPrimary } from "../../../../design/ButtonPrimary";
import { ButtonSecondary } from "../../../../design/ButtonSecondary";
import { IconPreco } from "../../../../design/Icons";
import { RangeSlider } from "../../../../design/RangeSlider";
import { formatToCurrency } from "../../../../lib/formatToCurrency";
import styles from "./styles.module.scss";
import { BiChevronLeft } from "react-icons/bi";

export function FilterPreco() {
  const { activeFilters, setActiveFilters, setFocusedFilter, filterRanges } =
    useContext(SystemContext);
  const minRange = filterRanges.minPrice!;;
  const maxRange = filterRanges.maxPrice!;;
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

  const isButtonDisabled = (minValue === minRange && maxValue === maxRange)

  return (
    <>
      <div className={styles.mainTitleWrapper}>
      <div className={styles.mainTitle}>
        <IconPreco size="1.4rem" />
        <h3>Preço</h3>
        </div>
        <div className={styles.closeArrow} onClick={() => setFocusedFilter(null)}>
          <BiChevronLeft size="2rem" />
        </div>
      </div>
      <div className={styles.filterWrapperSlider}>
        <div>
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
        </div>
        <div className={styles.buttonsWrapper}>
          <ButtonSecondary text="Limpar" onClick={clearPriceFilters} disabled={isButtonDisabled}  />
          <ButtonPrimary text="Aplicar" onClick={handleConfirmFilter} disabled={isButtonDisabled}  />
        </div>
      </div>
    </>
  );
}
