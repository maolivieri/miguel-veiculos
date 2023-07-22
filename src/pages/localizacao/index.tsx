import { Layout } from "../../components/Layout";
import SubPages from "../../components/SubPage";
import { ButtonPrimary } from "../../design/ButtonPrimary";
import styles from "./styles.module.scss";

function Content() {
  return (
    <Layout title="Miguel Veiculos | Localização">
      <p className={styles.copyTitle}>Endereço</p>
      <p className={styles.copy}>Praça 13 de Maio, 70,</p>
      <p className={styles.copy}>Centro, Capivari - SP</p>
      <p className={styles.copy}>13360-057</p>

      <p className={styles.timeTitle}>Horário</p>
      <p className={styles.copy}>Seg à Sex: 09:00 às 18:00</p>
      <p className={styles.copy}>Sábado: 09:00 às 12:00</p>

      {/* <div className={styles.button}>
        <ButtonPrimary text="Abrir Mapa" />
      </div> */}
    </Layout>
  );
}

export default function Location() {
  return (
    <SubPages map hasBlur title="Localização">
      <Content />
    </SubPages>
  );
}
