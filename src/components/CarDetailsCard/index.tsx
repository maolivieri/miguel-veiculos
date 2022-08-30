import Image from "next/image";
import styles from "./styles.module.scss";

import carImage from "../../../public/assets/images/honda_civic.png";
import jeepLogo from "../../../public/assets/jeep_logo.svg";

import { BsGear, BsCalendar4Week } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";
import { ReturnButton } from "../../design/ReturnButton";

export function CarDetailsCard() {
  const car = {
    flag_left: true,
    flag_rigth: true,
  };

  return (
    <main className={styles.mainContainer}>
      <header>
        <ReturnButton />
      </header>
      <div className={styles.imageWrapper}>
        <Image width={1350} height={885} src={carImage} alt="" />
      </div>
      <div className={styles.carInfoWrapper}>
        <div className={styles.brandImageWrapper}>
          <Image width={150} height={150} src={jeepLogo} alt="" />
        </div>
        <h3 className={styles.name}>Compass Limited</h3>
        <p className={styles.price}>R$147.900,00</p>
        <div className={styles.flagsWrapper}>
          {(car.flag_left || car.flag_rigth) && (
            <div
              className={
                car.flag_left && car.flag_rigth
                  ? styles.leftFlag
                  : car.flag_left && !car.flag_rigth
                  ? styles.leftFlagOnly
                  : styles.leftFlagInverted
              }
            >
              {car.flag_left ? "IPVA PAGO" : "TANQUE CHEIO"}
            </div>
          )}
          {car.flag_left && car.flag_rigth && (
            <div className={styles.rightFlag}>TANQUE CHEIO</div>
          )}
        </div>
      </div>
    </main>
  );
}
