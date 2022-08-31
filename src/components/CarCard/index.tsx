import Image from "next/image";
import styles from "./styles.module.scss";

import carImage from "../../../public/assets/images/honda_civic.png";
import { Checkbox } from "../../design/Checkbox";
import { useState } from "react";

import { BsGear, BsCalendar4Week } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";
import { ICar } from "../../types/Car";
import { formatToCurrency } from "../../lib/formatToCurrency";

interface IProps {
  car: ICar;
}

export function CarCard({ car }: IProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.imageWrapper}>
          <Image width={1350} height={885} src={car.main_image?.url} alt="" />
        </div>
        {/* <div className={styles.checkboxWrapper}>
          <Checkbox
            checked={checked}
            onChange={() => setChecked((prevState) => !prevState)}
          />
        </div> */}
      </div>
      <div className={styles.main}>
        <p className={styles.name}>{car.modelo}</p>
        <p className={styles.price}>{formatToCurrency(car.preco)}</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.detail}>
          <BsCalendar4Week size="1rem" />
          <p>{car.ano}</p>
        </div>
        <div className={styles.detail}>
          <BsGear size="1rem" />
          <p>{car.combustivel}</p>
        </div>
        <div className={styles.detail}>
          <GiPathDistance size="1rem" />
          <p>{car.km}</p>
        </div>
      </div>
    </div>
  );
}
