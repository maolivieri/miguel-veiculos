import SubPages from "../../components/SubPage";
import { ButtonPrimary } from "../../design/ButtonPrimary";
import styles from "./styles.module.scss";

function Content() {
  return (
    <>
      <p className={styles.copyTitle}>Endereço</p>
      <p className={styles.copy}>Praça 13 de Maio, 70,</p>
      <p className={styles.copy}>Centro, Capivari - SP</p>
      <p className={styles.copy}>13360-000</p>
      <div className={styles.button}>
        <ButtonPrimary text="Abrir Mapa" />
      </div>
    </>
  );
}

export default function Location() {
  return (
    <SubPages map title="Localização">
      <Content />
    </SubPages>
  );
}
