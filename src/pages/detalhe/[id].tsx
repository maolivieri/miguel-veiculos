import { CarDetailsCard } from "../../components/CarDetailsCard";
import { DetailsHeader } from "../../components/DetailsHeader";
import styles from "./styles.module.scss";

export default function CarDetailsPage() {
  return (
    <div className={styles.container}>
      <DetailsHeader />
      <CarDetailsCard />
    </div>
  );
}
