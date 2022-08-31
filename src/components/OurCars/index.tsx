import { ICar } from "../../types/Car";
import { CarCard } from "../CarCard";
import styles from "./styles.module.scss";

interface IProps {
  cars: ICar[];
}

export function OurCars({ cars }: IProps) {
  return (
    <div className={styles.container}>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
