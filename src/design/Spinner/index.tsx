// import styles from "./styles.module.scss";
import styles from "./styles.module.scss";

interface IProps {
  active: Boolean;
}

export function SpinnerComponent(props: IProps) {
  return (
    <div className={props.active ? styles.wrapper : styles.inactiveWrapper}>
      <div className={styles.backdrop} />
      <div className={styles.loader}>
        <svg width="83" height="83" viewBox="0 0 83 83">
          <g fill="url(#anime)">
            <path
              d="M21.053,415.834l37.461,33.715,37.461-33.715v16.857L58.515,466.407,21.053,432.691Z"
              transform="translate(-21.053 -415.834)"
            />
            <path
              d="M21.053,425.934l18.731,16.99v16.725L21.053,442.924Z"
              transform="translate(-21.053 -384.726)"
            />
            <path
              d="M53.558,425.934l-18.731,16.99v16.725l18.731-16.725Z"
              transform="translate(21.366 -384.726)"
            />
          </g>
          <defs>
            <linearGradient id="anime" y1="100%" x2="0%" y2="0%">
              <stop offset="0" stopColor="#FFF">
                <animate
                  dur="2s"
                  attributeName="offset"
                  fill="freeze"
                  from="0"
                  to="1"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="0" stopColor="#1A00">
                <animate
                  dur="2s"
                  attributeName="offset"
                  fill="freeze"
                  from="0"
                  to="1"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
