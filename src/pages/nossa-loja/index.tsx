import { SideDrawer } from "../../components/SideDrawer";
import { SubPagesHeader } from "../../components/SubpagesHeader";
import styles from "./styles.module.scss";

export default function OurStore() {
  return (
    <div className={styles.container}>
      <SideDrawer />
      <SubPagesHeader />
      <main>
        <h1>Nossa Loja</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
          massa sed elementum tempus egestas sed sed. Est velit egestas dui id
          ornare arcu odio ut. Posuere morbi leo urna molestie at. Vitae auctor
          eu augue ut lectus arcu bibendum at varius. Vitae auctor eu augue ut
          lectus arcu bibendum at varius.
        </p>
        {/* <p>…</p> */}
      </main>
    </div>
  );
}
