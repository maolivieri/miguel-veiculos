import { ButtonPrimary } from "../../../design/ButtonPrimary";
import { IconPreco } from "../../../design/Icons";
import { RangeSlider } from "../../../design/RangeSlider";
import styles from "./styles.module.scss";

export function PriceFilter() {
  return (
    <>
      <div className={styles.mainTitleWrapper}>
        <IconPreco size="1.4rem" />
        <h3>Preço</h3>
      </div>
      <div className={styles.filterWrapper}>
        <div className={styles.filterRange}>
          <div>
            <p>De</p>
            <h6>R$26.000,00</h6>
          </div>
          <div>
            <p>Até</p>
            <h6>R$73.000,00</h6>
          </div>
        </div>
        <RangeSlider />
        <div className={styles.buttonsWrapper}>
          <ButtonPrimary text="Confirmar" />
        </div>
      </div>
    </>
  );
}
