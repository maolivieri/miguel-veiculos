import styles from "./styles.module.scss";

export function SliderDots(props: {
  dotsLength: number;
  currentSlide: number;
  moveToIndex: (e: number) => void;
}) {
  return (
    <div className={styles.dots}>
      {Array.from(Array(props.dotsLength).keys()).map((idx) => {
        return (
          <button
            key={idx}
            onClick={() => {
              props.moveToIndex(idx);
            }}
            className={`${styles.dot} ${
              props.currentSlide === idx && styles.active
            }`}
          ></button>
        );
      })}
    </div>
  );
}
