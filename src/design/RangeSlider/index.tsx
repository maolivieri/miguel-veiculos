import { Dispatch, SetStateAction, useState } from "react";
import styles from "./styles.module.scss";

interface IProps {
  maxRange: number;
  minRange: number;
  minValue: number;
  maxValue: number;
  setMinValue: Dispatch<SetStateAction<number>>;
  setMaxValue: Dispatch<SetStateAction<number>>;
}

export function RangeSlider({
  maxRange,
  maxValue,
  minRange,
  minValue,
  setMaxValue,
  setMinValue,
}: IProps) {
  return (
    <div className={styles.SliderContainer}>
      <input
        title="min"
        aria-label="range-slider-min"
        type="range"
        min={minRange}
        max={maxRange}
        value={minValue}
        onChange={(e) => setMinValue(Number(e.target.value))}
        className={`${styles.thumb} ${styles.thumbleft}`}
      />
      <input
        title="max"
        aria-label="range-slider-max"
        type="range"
        min={minRange}
        max={maxRange}
        value={maxValue}
        onChange={(e) => setMaxValue(Number(e.target.value))}
        className={`${styles.thumb} ${styles.thumbright}`}
      />
      <div className={styles.slider}>
        <div className={styles.slider__track} />
        <div className={styles.slider__range} />
      </div>
    </div>
  );
}
