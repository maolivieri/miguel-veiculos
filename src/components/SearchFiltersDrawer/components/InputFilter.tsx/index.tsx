import {
  Dispatch,
  FocusEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Filters, FiltersIndexes } from "../../../../context/systemContext";
import { FilterInput, PriceFilterInput } from "../../../../design/FilterInput";
import { toCurrency, toNumber } from "../../../../lib/formatInputCurrency";
import styles from "./styles.module.scss";

interface InputProps {
  setFilters: Dispatch<SetStateAction<Filters>>;
  format: string;
  minValue: number | string;
  maxValue: number | string;
  placeholder: string;
  value1Name: FiltersIndexes;
  value2Name: FiltersIndexes;
  filters: Filters;
  price?: boolean;
}

export function InputFilter({
  format,
  setFilters,
  maxValue,
  minValue,
  placeholder,
  value1Name,
  value2Name,
  filters,
  price = false,
}: InputProps) {
  const [v1, setV1] = useState<number | string>("");
  const [v2, setV2] = useState<number | string>("");

  const filter1 = filters[value1Name];
  const filter2 = filters[value2Name];

  useEffect(() => {
    if (filter1 === null) {
      setV1("");
    }
    if (filter2 === null) {
      setV2("");
    }
  }, [filter1, filter2]);

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [value1Name]: v1, [value2Name]: v2 });
  };

  const handlePrice1Blur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const numberValue1 = toNumber(v1.toString());
      setV1((prevState) => toCurrency(prevState));
      setFilters({
        ...filters,
        [value1Name]: numberValue1,
      });
    }
  };
  const handlePrice2Blur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const numberValue2 = toNumber(v2.toString());
      setV2((prevState) => toCurrency(prevState));
      setFilters({
        ...filters,
        [value2Name]: numberValue2,
      });
    }
  };

  if (price) {
    return (
      <div className={styles.box}>
        <PriceFilterInput
          value={v1}
          setValue={setV1}
          min={minValue}
          max={maxValue}
          placeholder={placeholder}
          format={format}
          onBlur={handlePrice1Blur}
          isMin
        />
        <PriceFilterInput
          value={v2}
          setValue={setV2}
          min={minValue}
          max={maxValue}
          placeholder={placeholder}
          onBlur={handlePrice2Blur}
          format={format}
        />
      </div>
    );
  }

  return (
    <div className={styles.box}>
      <FilterInput
        value={v1}
        setValue={setV1}
        min={minValue}
        max={maxValue}
        placeholder={placeholder}
        format={format}
        onBlur={handleBlur}
        isMin
      />
      <FilterInput
        value={v2}
        setValue={setV2}
        min={minValue}
        max={maxValue}
        placeholder={placeholder}
        format={format}
        onBlur={handleBlur}
      />
    </div>
  );
}
