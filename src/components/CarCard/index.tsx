import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

import car_placeholder from "../../../public/assets/images/car-placeholder.png";

import { ICar } from "../../types/Car";
import { formatToCurrency } from "../../lib/formatToCurrency";
import { IconAno, IconCombustivel, IconKM } from "../../design/Icons";
import { UIContext } from "../../context/uiContext";
import { formatToBigNumber } from "../../lib/formatBigNumber";

interface IProps {
  car: ICar;
}

export function CarCard({ car }: IProps) {
  const [checked, setChecked] = useState(false);
  const { startLoading } = useContext(UIContext);

  return (
    <Link
      href={{
        pathname: `/detalhe/${car.id}`,
      }}
    >
      <div className={styles.container} onClick={startLoading}>
        <div className={styles.header}>
          <div className={styles.imageWrapper}>
            <Image
              width={1350}
              height={885}
              src={car.main_image?.url || car_placeholder}
              alt=""
            />
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
            <IconAno size="1rem" />
            <p>{`${car.anoFabricacao} | ${car.anoModelo}`}</p>
          </div>
          <div className={styles.detail}>
            <IconCombustivel size="1rem" />
            <p>{car.combustivel?.nome}</p>
          </div>
          <div className={styles.detail}>
            <IconKM size="1rem" />
            <p>{`${formatToBigNumber(car.km)} KM`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
