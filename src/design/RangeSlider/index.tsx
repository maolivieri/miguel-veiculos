import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import styles from "./styles.module.scss";

interface IProps {
  maxRange: number;
  minRange: number;
  minValue: number;
  maxValue: number;
  setMinValue: Dispatch<SetStateAction<number>>;
  setMaxValue: Dispatch<SetStateAction<number>>;
  id: string;
}

export function RangeSlider({
  maxRange,
  maxValue,
  minRange,
  minValue,
  setMaxValue,
  setMinValue, 
  id
}: IProps) {
  const rangeWidth = (((maxValue - minValue) / (maxRange - minRange)) * 100)
  const rangeMotion =  (((minValue - minRange) / (maxRange - minRange)) * 100)

  const handleOnChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) <= maxValue) {
      setMinValue(Number(e.target.value))
    }
  }

  const handleOnChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) >= minValue) {
      setMaxValue(Number(e.target.value))
    }
  }

  return (
    <div className={styles.SliderContainer}>
      <input
        id={id}
        title="min"
        aria-label="range-slider-min"
        type="range"
        min={minRange}
        max={maxRange}
        value={minValue}
        onChange={handleOnChangeMin}
        className={`${styles.thumb} ${styles.thumbleft}`}
      />
      <input
        id={id}
        title="max"
        aria-label="range-slider-max"
        type="range"
        min={minRange}
        max={maxRange}
        value={maxValue}
        onChange={handleOnChangeMax}
        className={`${styles.thumb} ${styles.thumbright}`}
      />
      <div className={styles.slider}>
        <div className={styles.slider__track} />
        <div className={styles.slider__range} style={{
          width: `${rangeWidth}%`,
          marginLeft: `${rangeMotion}%`,
        }}/>
      </div>
    </div>
  );
}
