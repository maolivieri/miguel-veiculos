import Image from "next/image";
import styles from "./styles.module.scss";

import carImage from "../../../public/assets/images/honda_civic.png";
import { Checkbox } from "../../design/Checkbox";
import { useState } from "react";

import { BsGear, BsCalendar4Week } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";

export function CarCard() {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.imageWrapper}>
          <Image width={1350} height={885} src={carImage} alt="" />
        </div>
        {/* <div className={styles.checkboxWrapper}>
          <Checkbox
            checked={checked}
            onChange={() => setChecked((prevState) => !prevState)}
          />
        </div> */}
      </div>
      <div className={styles.main}>
        <p className={styles.name}>Honda City LX</p>
        <p className={styles.price}>R$65.900,00</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.detail}>
          <BsCalendar4Week size="1rem" />
          <p>2018 | 2019</p>
        </div>
        <div className={styles.detail}>
          <BsGear size="1rem" />
          <p>1.6 Flex</p>
        </div>
        <div className={styles.detail}>
          <GiPathDistance size="1rem" />
          <p>29.000 km</p>
        </div>
      </div>
    </div>
  );
}
