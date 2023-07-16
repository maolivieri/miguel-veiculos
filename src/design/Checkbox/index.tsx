import styles from "./styles.module.scss";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  large?: boolean
}

export function Checkbox({ large = false, ...props }: IProps) {
  return (
    <label className={styles.container}>
      <input type="checkbox" {...props} />
      <span className={`${styles.checkmark} ${large && styles.checkmark_large}`} />
    </label>
  );
}
