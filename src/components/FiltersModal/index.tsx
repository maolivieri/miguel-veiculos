import { useContext } from "react";
import { BiGasPump, BiTransferAlt } from "react-icons/bi";
import { HiOutlineClipboardList } from "react-icons/hi";
import {
  BsCalendar4Week,
  BsCheck2Square,
  BsDoorClosed,
  BsGear,
} from "react-icons/bs";
import { ImPower } from "react-icons/im";
import { TbCurrencyDollar } from "react-icons/tb";
import {
  initialFiltersValue,
  SystemContext,
} from "../../context/systemContext";
import { ButtonPrimary } from "../../design/ButtonPrimary";
import { ButtonSecondary } from "../../design/ButtonSecondary";
import { FilterItem } from "./components/FilterItem";
import { FilterWrapper } from "./components/FilterWrapper";
import styles from "./styles.module.scss";
import { GiGearStickPattern, GiPathDistance } from "react-icons/gi";
import { AiOutlineCar } from "react-icons/ai";

export function FiltersModal() {
  const { isFiltersOpen, toggleFilters, setActiveFilters } =
    useContext(SystemContext);

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
          <FilterItem
            icon={<TbCurrencyDollar />}
            title="Preço"
            total={1}
            filter="preco"
          />
          <FilterItem
            icon={<BsCalendar4Week />}
            title="Ano"
            total={1}
            filter="ano"
          />
          <FilterItem
            icon={<GiPathDistance />}
            title="KM"
            total={1}
            filter="km"
          />
          <FilterItem
            icon={<TbCurrencyDollar />}
            title="Carroceria"
            total={1}
            filter="carroceria"
          />
          <FilterItem
            icon={<BsCheck2Square />}
            title="Opcionais"
            total={1}
            filter="opcionais"
          />
          <FilterItem
            icon={<AiOutlineCar />}
            title="Marca"
            total={1}
            filter="marca"
          />
          <FilterItem
            icon={<GiGearStickPattern />}
            title="Câmbio"
            total={1}
            filter="cambio"
          />
          <FilterItem
            icon={<BiGasPump />}
            title="Combustível"
            total={1}
            filter="combustivel"
          />
          <FilterItem icon={<BsGear />} title="Cor" total={1} filter="cor" />
          <FilterItem
            icon={<HiOutlineClipboardList />}
            title="Documentação"
            total={1}
            filter="documentacao"
          />
          <FilterItem
            icon={<ImPower />}
            title="Potência"
            total={1}
            filter="potencia"
          />
          <FilterItem
            icon={<BsDoorClosed />}
            title="Portas"
            total={1}
            filter="portas"
          />
          <FilterItem
            icon={<BiTransferAlt />}
            title="Tração"
            total={1}
            filter="tracao"
          />
        </div>
        <div className={styles.buttonsWrapper}>
          <ButtonPrimary text="Filtrar" onClick={toggleFilters} />
          <ButtonSecondary
            text="Limpar Filtros"
            onClick={() => setActiveFilters(initialFiltersValue)}
          />
        </div>
      </div>
      <FilterWrapper />
    </div>
  );
}
