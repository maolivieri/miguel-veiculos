import { useContext, useState } from "react";
import { ButtonPrimary } from "../../../../design/ButtonPrimary";
import { IconKM } from "../../../../design/Icons";
import { RangeSlider } from "../../../../design/RangeSlider";
import styles from "./styles.module.scss";
import { SystemContext } from "../../../../context/systemContext";
import { ButtonSecondary } from "../../../../design/ButtonSecondary";
import { formatToBigNumber } from "../../../../lib/formatBigNumber";
import { BiChevronLeft } from "react-icons/bi";

export function FilterKM() {
  const { activeFilters, setActiveFilters, setFocusedFilter, filterRanges } =
    useContext(SystemContext);
  const minRange = filterRanges.minKM!;
  const maxRange = filterRanges.maxKM!;;
  const [minValue, setMinValue] = useState(activeFilters.kmStart || minRange);
  const [maxValue, setMaxValue] = useState(activeFilters.kmEnd || maxRange);

  const handleConfirmFilter = () => {
    setActiveFilters((prevState) => ({
      ...prevState,
      kmStart: minValue,
      kmEnd: maxValue,
    }));
    setFocusedFilter(null);
  };

  const clearPriceFilters = () => {
    setMinValue(minRange);
    setMaxValue(maxRange);
    setActiveFilters((prevState) => ({
      ...prevState,
      kmStart: null,
      kmEnd: null,
    }));
  };

  return (
    <>
      <div className={styles.mainTitleWrapper}>
      <div className={styles.mainTitle}>
        <IconKM size="1.4rem" />
        <h3>KM</h3>
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
            <h6>{`${formatToBigNumber(minValue)} KM`}</h6>
          </div>
          <div>
            <p>Até</p>
            <h6>{`${formatToBigNumber(maxValue)} KM`}</h6>
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
          <ButtonPrimary text="Aplicar" onClick={handleConfirmFilter} />
        </div>
      </div>
    </>
  );
}
