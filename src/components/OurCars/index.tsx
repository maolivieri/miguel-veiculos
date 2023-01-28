import { ICar } from "../../types/Car";
import { CarCard } from "../CarCard";
import { CarNotFound } from "../CarNotFound";
import styles from "./styles.module.scss";

interface IProps {
  cars: ICar[];
}

export function OurCars({ cars }: IProps) {
  return (
    <>
      <h3 className={styles.title}>Nossos Veículos</h3>
      {!cars.length ? (
        <div className={styles.notfoundcontainer}>
          <CarNotFound />
        </div>
      ) : (
        <div className={styles.container}>
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </>
  );
}
