import Image from "next/image";
import styles from "./styles.module.scss";

import { BsGear, BsCalendar4Week } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";
import { ReturnButton } from "../../design/ReturnButton";
import { CarDetailSpecCard } from "../CarDetailSpecCard";
import { OptionalCard } from "../OptionalCard";
import { ICar } from "../../types/Car";
import { formatToCurrency } from "../../lib/formatToCurrency";

interface IProps {
  car: ICar;
}

export function CarDetailsCard({ car }: IProps) {
  return (
    <main className={styles.mainContainer}>
      <header>
        <ReturnButton />
      </header>
      <div className={styles.imageAndDetailsWrapper}>
        <div className={styles.imageWrapper}>
          <Image width={1350} height={885} src={car.main_image?.url} alt="" />
        </div>
        <div>
          <div className={styles.carInfoWrapper}>
            <div className={styles.brandImageWrapper}>
              <Image
                width={150}
                height={150}
                src={car.marca?.logo?.url}
                alt={`logotipo da marca ${car.marca.nome}`}
              />
            </div>
            <h3 className={styles.name}>{car.modelo}</h3>
            <p className={styles.price}>{formatToCurrency(car.preco)}</p>
            <div className={styles.flagsWrapper}>
              {(car.opcional_esquerdo || car.opcional_direito) && (
                <div
                  className={
                    car.opcional_esquerdo && car.opcional_direito
                      ? styles.leftFlag
                      : car.opcional_esquerdo && !car.opcional_direito
                      ? styles.leftFlagOnly
                      : styles.leftFlagInverted
                  }
                >
                  {car.opcional_esquerdo ? "IPVA PAGO" : "TANQUE CHEIO"}
                </div>
              )}
              {car.opcional_esquerdo && car.opcional_direito && (
                <div className={styles.rightFlag}>TANQUE CHEIO</div>
              )}
            </div>
          </div>
          <div className={styles.specsWrapper}>
            <CarDetailSpecCard icon={<BsGear />} title="Ano" value={car.ano} />
            <CarDetailSpecCard icon={<BsGear />} title="KM" value={car.km} />
            <CarDetailSpecCard
              icon={<BsGear />}
              title="Combustível"
              value={car.combustivel}
            />
            <CarDetailSpecCard
              icon={<BsGear />}
              title="Potência"
              value={car.potencia}
            />
            <CarDetailSpecCard
              icon={<BsGear />}
              title="Cambio"
              value={car.cambio}
            />
            <CarDetailSpecCard
              icon={<BsGear />}
              title="Autonomia"
              value={`${car.autonomia} Km/L`}
            />
            <CarDetailSpecCard
              icon={<BsGear />}
              title="Tração"
              value={car.tracao}
            />
            <CarDetailSpecCard
              icon={<BsGear />}
              title="Portas"
              value={`${car.portas}`}
            />
            <CarDetailSpecCard
              icon={<BsGear />}
              title="Placa"
              value={car.finalDaPlaca}
            />
            <CarDetailSpecCard icon={<BsGear />} title="Cor" value={car.cor} />
            <CarDetailSpecCard
              icon={<BsGear />}
              title="Assentos"
              value={`${car.assentos}`}
            />
            <CarDetailSpecCard
              icon={<BsGear />}
              title="Carroceri"
              value={car.carroceria}
            />
          </div>
        </div>
      </div>
      <h4>Opcionais</h4>
      <div className={styles.optionalsWrapper}>
        <OptionalCard
          icon={<BsCalendar4Week />}
          title="Essenciais"
          list={car.essenciais}
        />
        <OptionalCard
          icon={<BsCalendar4Week />}
          title="Conforto"
          list={car.confortos}
        />
        <OptionalCard
          icon={<BsCalendar4Week />}
          title="Tecnologia"
          list={car.tecnologias}
        />
        <OptionalCard
          icon={<BsCalendar4Week />}
          title="Segurança"
          list={car.segurancas}
        />
      </div>
    </main>
  );
}
