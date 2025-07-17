import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import slugify from 'slugify';
import styles from "./styles.module.scss";

import car_placeholder from "../../../public/assets/images/car-placeholder.png";

import { ICar } from "../../types/Car";
import { formatToCurrency } from "../../lib/formatToCurrency";
import {
  IconAno,
  IconCombustivel,
  IconKM,
  IconPotencia,
} from "../../design/Icons";
import { UIContext } from "../../context/uiContext";
import { formatToBigNumber } from "../../lib/formatBigNumber";

interface IProps {
  car: ICar;
  alternativeLayout?: boolean;
}

export function CarCard({ car, alternativeLayout = false }: IProps) {
  const { startLoading, display } = useContext(UIContext);

  const altLayout =
    (display === "list" || alternativeLayout) && styles.altLayout;

  const altLayoutAddClass =
    (display === "list" || alternativeLayout) && styles.altLayoutAddClass;

  const altImageLayout =
    (display === "list" || alternativeLayout) && styles.altImageLayout;
  return (
    <Link
      href={{
        pathname: `/detalhe/${car.id}`,
      }}
      passHref
    >
      <div aria-label={`${slugify(car.modelo)}`} id="ga4_carClick" className={styles.box}>
        {(car.opcional_esquerdo || car.opcional_direito) && (
          <div
            className={`${styles.bonusFlag} ${car.opcional_esquerdo ? styles.leftFlag : styles.rightFlag
              } ${altLayoutAddClass}`}
          >
            <p className={styles.bonusFlagText}>
              {car.opcional_esquerdo ? "IPVA PARCIAL" : "IPVA PAGO"}
            </p>
          </div>
        )}
        <div
          className={`${styles.container} ${altLayout}`}
          onClick={startLoading}
        >
          <div className={styles.header}>
            <div
              className={`${styles.imageWrapper} ${altImageLayout}`}
              onContextMenu={(e) => e.preventDefault()}
            >
              <Image
                width={1350}
                height={1080}
                src={car.main_image?.url || car_placeholder}
                alt=""
                style={{ height: 'auto', width: '100%' }}
              />
            </div>
          </div>
          <div>
            <div className={styles.main}>
              <p className={styles.name}>{car.modelo}</p>
              <p className={styles.price}>{formatToCurrency(car.preco)}</p>
            </div>
            <div className={styles.footer}>
              <div className={styles.detail}>
                <IconPotencia
                  size={display === "list" ? "1.2rem" : "0.9rem"}
                  color="var(--gray-700)"
                />
                <p>{car.potencia}</p>
              </div>
              <div className={styles.detail}>
                <IconAno
                  size={display === "list" ? "1.2rem" : "0.9rem"}
                  color="var(--gray-700)"
                />
                <p>{`${car.anoFabricacao} | ${car.anoModelo}`}</p>
              </div>
              <div className={styles.detail}>
                <IconCombustivel
                  size={display === "list" ? "1.2rem" : "0.9rem"}
                  color="var(--gray-700)"
                />
                <p>{car.combustivel?.nome}</p>
              </div>
              <div className={styles.detail}>
                <IconKM
                  size={display === "list" ? "1.2rem" : "0.9rem"}
                  color="var(--gray-700)"
                />
                <p>{`${formatToBigNumber(car.km)} KM`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
