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
import { toNumber } from "../../../../lib/formatInputCurrency";
import { formatToBigNumber } from "../../../../lib/formatBigNumber";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  setFilters: Dispatch<SetStateAction<Filters>>;
  minValue: number | string;
  maxValue: number | string;
  placeholder: string;
  value1Name: FiltersIndexes;
  value2Name: FiltersIndexes;
  filters: Filters;
}

export function YearInput({
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
    const removeLetters1 = e.target.value.toString().replace(/[^0-9]/g, '')
    if (removeLetters1.length < 5) {
      setV1(removeLetters1)
      setFilters({
        ...filters,
        [value1Name]: Number(removeLetters1),
      });
    }
    if (removeLetters1 === '') {
      setFilters({
            ...filters,
            [value1Name]: null,
          });
    }
  }
  const onChangeHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
    const removeLetters2 = e.target.value.toString().replace(/[^0-9]/g, '')
    if (removeLetters2.length < 5) {
      setV2(removeLetters2)
      if (Number(removeLetters2) >= Number(v1)) {
        setFilters({
          ...filters,
          [value2Name]: Number(removeLetters2),
        });
      } 
    }
    if (removeLetters2 === '') {
      setFilters({
            ...filters,
            [value2Name]: null,
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
              id={`${placeholder}`}
              name={`${placeholder}`}
              placeholder={placeholder}
              // onBlur={handleBlur1}
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
              id={`${placeholder}`}
              name={`${placeholder}`}
              placeholder={placeholder}
              // onBlur={handleBlur2}
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
