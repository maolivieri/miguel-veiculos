import { SideDrawer } from "../../components/SideDrawer";
import { SubPagesHeader } from "../../components/SubpagesHeader";
import styles from "./styles.module.scss";

export default function Location() {
  return (
    <div className={styles.container}>
      <SideDrawer />
      <header className={styles.header}>
        <SubPagesHeader />
        <div className={styles.mapWrapper}>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.767361357166!2d-47.50901448566451!3d-22.99558068496674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c61d482d60e4b9%3A0x21d7d83f290c01e2!2sMiguel%20Ve%C3%ADculos!5e0!3m2!1sen!2sbr!4v1662749744604!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.pageTitle}>Nossa Loja</h1>
          <p className={styles.copyTitle}>Endereço</p>
          <p className={styles.copy}>Praça 13 de Maio, 70,</p>
          <p className={styles.copy}>Centro, Capivari - SP</p>
          <p className={styles.copy}>13360-000</p>
        </div>
      </main>
    </div>
  );
}
