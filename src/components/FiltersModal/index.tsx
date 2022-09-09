import { useContext } from "react";
import { TbCurrencyDollar } from "react-icons/tb";
import { SystemContext } from "../../context/systemContext";
import { ButtonPrimary } from "../../design/ButtonPrimary";
import { ButtonSecondary } from "../../design/ButtonSecondary";
import { FilterItem } from "./components/FilterItem";
import styles from "./styles.module.scss";

export function FiltersModal() {
  const { isFiltersOpen, toggleFilters } = useContext(SystemContext);

  return (
    <div
      className={
        isFiltersOpen ? styles.filtersModalContainer : styles.hiddenModal
      }
    >
      <div className={styles.dropShaddow} onClick={toggleFilters} />
      <div className={styles.main}>
        <h4 className={styles.title}>Filtros</h4>
        <div className={styles.filterWrapper}>
          <FilterItem icon={<TbCurrencyDollar />} title="Preço" total={1} />
          <FilterItem icon={<TbCurrencyDollar />} title="Preço" total={1} />
          <FilterItem icon={<TbCurrencyDollar />} title="Preço" total={1} />
          <FilterItem icon={<TbCurrencyDollar />} title="Preço" total={1} />
          <FilterItem icon={<TbCurrencyDollar />} title="Preço" total={1} />
          <FilterItem icon={<TbCurrencyDollar />} title="Preço" total={1} />
          <FilterItem icon={<TbCurrencyDollar />} title="Preço" total={1} />
          <FilterItem icon={<TbCurrencyDollar />} title="Preço" total={1} />
          <FilterItem icon={<TbCurrencyDollar />} title="Preço" total={1} />
          <FilterItem icon={<TbCurrencyDollar />} title="Preço" total={1} />
          <FilterItem icon={<TbCurrencyDollar />} title="Preço" total={1} />
          <FilterItem icon={<TbCurrencyDollar />} title="Preço" total={1} />
          <FilterItem icon={<TbCurrencyDollar />} title="Preço" total={1} />
          <FilterItem icon={<TbCurrencyDollar />} title="Preço" total={1} />
        </div>
        <div className={styles.buttonsWrapper}>
          <ButtonPrimary text="Filtrar" />
          <ButtonSecondary text="Limpar Filtros" />
        </div>
      </div>
    </div>
  );
}
