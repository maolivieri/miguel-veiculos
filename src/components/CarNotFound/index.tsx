import Image from "next/image";
import styles from "./styles.module.scss";

export function CarNotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <Image
          width={30}
          height={30}
          src="/assets/notfoundicon.svg"
          alt=""
          layout="responsive"
        />
      </div>
      <p className={styles.text}>
        Neste momento, não temos esse modelo disponível na loja.
      </p>
    </div>
  );
}
