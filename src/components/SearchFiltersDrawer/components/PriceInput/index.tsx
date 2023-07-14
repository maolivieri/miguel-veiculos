import {
  ChangeEvent,
  Dispatch,
  FocusEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import styles from "./styles.module.scss";
import { Filters, FiltersIndexes } from "../../../../context/systemContext";
import { toCurrency, toNumber } from "../../../../lib/formatInputCurrency";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  setFilters: Dispatch<SetStateAction<Filters>>;
  minValue: number | string;
  maxValue: number | string;
  placeholder: string;
  value1Name: FiltersIndexes;
  value2Name: FiltersIndexes;
  filters: Filters;
}

export function PriceInput({
  setFilters,
  maxValue,
  minValue,
  placeholder,
  value1Name,
  value2Name,
  filters,
  ...props
}: InputProps) {
  const [v1, setV1] = useState<string | ReadonlyArray<string> | number>("");
  const [v2, setV2] = useState<string | ReadonlyArray<string> | number>("");
  
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

  const onChangeHandler1 = (e: ChangeEvent<HTMLInputElement>) => {
    const currencyInput = toCurrency(e.target.value)
    if (toNumber(currencyInput) === 0) {
      setFilters({
            ...filters,
            [value1Name]: null,
          });
      setV1('')
    } else {
    setV1(currencyInput)
    setFilters({
      ...filters,
      [value1Name]: toNumber(currencyInput),
    });
  }
  }
  const onChangeHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
    const currencyInput = toCurrency(e.target.value)
    if (toNumber(currencyInput) === 0) {
      setFilters({
            ...filters,
            [value2Name]: null,
          });
      setV2('')
    } else {
    setV2(currencyInput)
    setFilters({
      ...filters,
      [value2Name]: toNumber(currencyInput),
    });
  }
  }

    return (
      <div className={styles.box}>
        <div className={styles.container}>
          <p className={styles.title}>De</p>
          <div className={styles.inputBox}>
            <input
              className={styles.input}
              type="text"
              id={`${placeholder}`}
              name={`${placeholder}`}
              pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
              data-type="currency"
              placeholder={`R$`}
              value={v1}
              onChange={onChangeHandler1}
              {...props}
            />
          </div>
          <span>{`Min.: ${minValue}`}</span>
        </div>
        <div className={styles.container}>
          <p className={styles.title}>Até</p>
          <div className={styles.inputBox}>
            <input
              className={styles.input}
              type="text"
              id={`${placeholder}`}
              name={`${placeholder}`}
              pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
              data-type="currency"
              placeholder={`R$`}
              value={v2}
              onChange={onChangeHandler2}
              {...props}
            />
          </div>
          <span>{`Max.: ${maxValue}`}</span>
        </div>
      </div>
    );
}
