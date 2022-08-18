import styles from "./styles.module.scss";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox({ ...props }: IProps) {
  return (
    <label className={styles.container}>
      <input type="checkbox" {...props} />
      <span className={styles.checkmark} />
    </label>
  );
}
