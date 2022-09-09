import { SideDrawer } from "../../components/SideDrawer";
import { SubPagesHeader } from "../../components/SubpagesHeader";
import styles from "./styles.module.scss";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <SideDrawer />
      <SubPagesHeader />
      <main>
        <h1>Sobre Nós</h1>
        <p>
          Fundada por Miguel Rodrigues de Jesus, na cidade de Capivari, no
          interior de São Paulo, a loja Miguel Veículos vem atuando no mercado
          de venda de carros semi-novos desde 1998.
        </p>
        {/* <p>…</p> */}
      </main>
    </div>
  );
}
