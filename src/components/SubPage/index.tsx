import { PageFooter } from "../PageFooter";
import { SideDrawer } from "../SideDrawer";
import { SubPagesHeader } from "../SubpagesHeader";
import styles from "./styles.module.scss";

interface IProps {
  image: string;
  title: string;
  copy: string;
}

export default function SubPages({ copy, image, title }: IProps) {
  return (
    <div className={styles.page}>
      <SideDrawer />
      <header className={styles.header}>
        <SubPagesHeader />
      </header>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.cardImage}></div>
          <div className={styles.cardContent}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.copy}>{copy}</p>
          </div>
        </div>
      </main>
      <PageFooter />
    </div>
  );
}
