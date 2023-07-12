import { useContext } from "react";
import { SystemContext } from "../../context/systemContext";
import { UIContext } from "../../context/uiContext";
import { ICar } from "../../types/Car";
import { CarCard } from "../CarCard";
import { CarNotFound } from "../CarNotFound";
import styles from "./styles.module.scss";

interface IProps {
  cars: ICar[];
}

export function OurCars({ cars }: IProps) {
  const { isFiltersOpen } = useContext(SystemContext);
  const { display } = useContext(UIContext);

  const isList = display === "list";

  return (
    <div className={isFiltersOpen ? styles.openDrawerWrapper : styles.none}>
      {/* <h3 className={styles.title}>Nossos Veículos</h3> */}
      {!cars.length ? (
        <div className={styles.notfoundcontainer}>
          <CarNotFound />
        </div>
      ) : (
        <div
          className={`${styles.container} ${isFiltersOpen && styles.openDrawer}
          ${isList && styles.listGrid} 
          `}
        >
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
}
