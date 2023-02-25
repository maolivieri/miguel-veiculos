import styles from "./styles.module.scss";

import { Dispatch, SetStateAction } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: number | string;
  setValue: Dispatch<SetStateAction<number | string>>;
  placeholder: string;
  min: number | string;
  max: number | string;
  format: string;
  isMin?: Boolean;
  prefix?: string;
}

export function PriceFilterInput({
  value,
  setValue,
  max,
  min,
  placeholder,
  format,
  isMin = false,
  prefix,
  ...props
}: InputProps) {
  const title = isMin ? "Mínimo" : "Máximo";
  const subTitle = isMin ? `Min.: ${min}` : `Max.: ${max}`;

  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.inputBox}>
        {prefix && <span>{prefix}</span>}
        <input
          className={styles.input}
          type="text"
          id={`${placeholder}`}
          name={`${placeholder}`}
          pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
          data-type="currency"
          placeholder={`${placeholder}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          {...props}
        />
      </div>
      <span>{subTitle}</span>
    </div>
  );
}

export function FilterInput({
  value,
  setValue,
  max,
  min,
  placeholder,
  format,
  isMin = false,
  prefix,
  ...props
}: InputProps) {
  // const initValue = isMin ? min : max;
  const title = isMin ? "Mínimo" : "Máximo";
  const subTitle = isMin ? `Min.:${min}` : `Max.:${max}`;

  return (
    <div className={styles.container}>
      <label className={styles.title}>{title}</label>
      <div className={styles.inputBox}>
        {prefix && <span>{prefix}</span>}
        <input
          className={styles.input}
          type="number"
          id={`${placeholder}`}
          name={`${placeholder}`}
          min={`${min}`}
          max={`${max}`}
          placeholder={`${placeholder}`}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          {...props}
        />
      </div>
      <span>{subTitle}</span>
    </div>
  );
}
