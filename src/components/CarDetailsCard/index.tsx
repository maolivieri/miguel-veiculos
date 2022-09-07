import Image from "next/image";
import styles from "./styles.module.scss";

import { ReturnButton } from "../../design/ReturnButton";
import { CarDetailSpecCard } from "../CarDetailSpecCard";
import { OptionalCard } from "../OptionalCard";
import { ICar } from "../../types/Car";
import { formatToCurrency } from "../../lib/formatToCurrency";
import car_placeholder from "../../../public/assets/images/car-placeholder.png";

//icons

import { BsGear, BsCalendar4Week, BsDoorClosed } from "react-icons/bs";
import { GiCarSeat, GiGearStickPattern, GiPathDistance } from "react-icons/gi";
import { BiGasPump, BiTransferAlt } from "react-icons/bi";
import { ImPower } from "react-icons/im";
import { TbCar } from "react-icons/tb";
import { FaLeaf } from "react-icons/fa";
import {
  AiFillSafetyCertificate,
  AiOutlineCheckCircle,
  AiOutlineNumber,
} from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { MdAirlineSeatIndividualSuite } from "react-icons/md";

interface IProps {
  car: ICar;
}

export function CarDetailsCard({ car }: IProps) {
  console.log(car);

  return (
    <main className={styles.mainContainer}>
      <header>
        <ReturnButton />
      </header>
      <div className={styles.imageAndDetailsWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            width={1350}
            height={885}
            src={car.main_image?.url || car_placeholder}
            alt=""
          />
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
            <div className={styles.priceAndFlagsWrapper}>
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
          </div>
          <div className={styles.specsWrapper}>
            <CarDetailSpecCard
              icon={<BsCalendar4Week />}
              title="Ano"
              value={car.ano}
            />
            <CarDetailSpecCard
              icon={<GiPathDistance />}
              title="KM"
              value={car.km}
            />
            <CarDetailSpecCard
              icon={<BiGasPump />}
              title="Combustível"
              value={car.combustivel}
            />
            <CarDetailSpecCard
              icon={<ImPower />}
              title="Potência"
              value={car.potencia}
            />
            <CarDetailSpecCard
              icon={<GiGearStickPattern />}
              title="Cambio"
              value={car.cambio}
            />
            <CarDetailSpecCard
              icon={<FaLeaf />}
              title="Autonomia"
              value={`${car.autonomia} Km/L`}
            />
            <CarDetailSpecCard
              icon={<BiTransferAlt />}
              title="Tração"
              value={car.tracao}
            />
            <CarDetailSpecCard
              icon={<BsDoorClosed />}
              title="Portas"
              value={`${car.portas}`}
            />
            <CarDetailSpecCard
              icon={<AiOutlineNumber />}
              title="Placa"
              value={car.finalDaPlaca}
            />
            <CarDetailSpecCard icon={<BsGear />} title="Cor" value={car.cor} />
            <CarDetailSpecCard
              icon={<GiCarSeat />}
              title="Assentos"
              value={`${car.assentos}`}
            />
            <CarDetailSpecCard
              icon={<TbCar />}
              title="Carroceria"
              value={car.carroceria}
            />
          </div>
        </div>
      </div>
      <h4 className={styles.optionalsHeadTitle}>Opcionais</h4>
      <div className={styles.optionalsWrapper}>
        <OptionalCard
          icon={<AiOutlineCheckCircle />}
          title="Essenciais"
          list={car.essenciais}
        />
        <OptionalCard
          icon={<MdAirlineSeatIndividualSuite />}
          title="Conforto"
          list={car.confortos}
        />
        <OptionalCard
          icon={<GrTechnology />}
          title="Tecnologia"
          list={car.tecnologias}
        />
        <OptionalCard
          icon={<AiFillSafetyCertificate />}
          title="Segurança"
          list={car.segurancas}
        />
      </div>
    </main>
  );
}
