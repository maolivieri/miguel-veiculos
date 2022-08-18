import { CarCard } from "../CarCard";
import styles from "./styles.module.scss";

export function OurCars() {
  return (
    <div className={styles.container}>
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
    </div>
  );
}
