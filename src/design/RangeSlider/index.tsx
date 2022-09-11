import { useState } from "react";

import styles from "./styles.module.scss";

export function RangeSlider() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  return (
    <div className={styles.SliderContainer}>
      <input
        type="range"
        min="0"
        max="1000"
        // value={value1}
        onChange={(e) => console.log(e)}
        className={`${styles.thumb} ${styles.thumbleft}`}
      />
      <input
        type="range"
        min="0"
        max="1000"
        className={`${styles.thumb} ${styles.thumbright}`}
      />
      <div className={styles.slider}>
        <div className={styles.slider__track} />
        <div className={styles.slider__range} />
      </div>
    </div>
  );
}
