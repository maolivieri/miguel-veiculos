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

export function NumberInput({
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
    const removeLetters = e.target.value.toString().replace(/[^0-9]/g, '')
    if (removeLetters === '') {
      setFilters({
            ...filters,
            [value1Name]: null,
          });
      setV1('')
    } else {
      setFilters({
        ...filters,
        [value1Name]: Number(removeLetters),
      });
      setV1(formatToBigNumber(removeLetters))
    }
  }
  const onChangeHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
    const removeLetters = e.target.value.toString().replace(/[^0-9]/g, '')
    if (removeLetters === '') {
      setFilters({
            ...filters,
            [value2Name]: null,
          });
      setV2('')
    } else {
      setFilters({
        ...filters,
        [value2Name]: Number(removeLetters),
      });
      setV2(formatToBigNumber(removeLetters))
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
