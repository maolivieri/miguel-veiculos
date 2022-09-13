import { useContext } from "react";
import styles from "./styles.module.scss";
import {
  initialFiltersValue,
  SystemContext,
} from "../../context/systemContext";

//Components
import { ButtonPrimary } from "../../design/ButtonPrimary";
import { ButtonSecondary } from "../../design/ButtonSecondary";
import { FilterItem } from "./components/FilterItem";
import { FilterWrapper } from "./components/FilterWrapper";

//Icons
import {
  IconAno,
  IconCambio,
  IconCarroceria,
  IconCombustivel,
  IconCor,
  IconDocumentation,
  IconKM,
  IconMarca,
  IconOpcionais,
  IconPortas,
  IconPotencia,
  IconPreco,
  IconTracao,
} from "../../design/Icons";

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
            icon={<IconPreco />}
            title="Preço"
            total={1}
            filter="preco"
          />
          <FilterItem icon={<IconAno />} title="Ano" total={1} filter="ano" />
          <FilterItem icon={<IconKM />} title="KM" total={1} filter="km" />
          <FilterItem
            icon={<IconCarroceria />}
            title="Carroceria"
            total={1}
            filter="carroceria"
          />
          <FilterItem
            icon={<IconOpcionais />}
            title="Opcionais"
            total={1}
            filter="opcionais"
          />
          <FilterItem
            icon={<IconMarca />}
            title="Marca"
            total={1}
            filter="marca"
          />
          <FilterItem
            icon={<IconCambio />}
            title="Câmbio"
            total={1}
            filter="cambio"
          />
          <FilterItem
            icon={<IconCombustivel />}
            title="Combustível"
            total={1}
            filter="combustivel"
          />
          <FilterItem icon={<IconCor />} title="Cor" total={1} filter="cor" />
          <FilterItem
            icon={<IconDocumentation />}
            title="Documentação"
            total={1}
            filter="documentacao"
          />
          {/* <FilterItem
            icon={<IconPotencia />}
            title="Potência"
            total={1}
            filter="potencia"
          />
          <FilterItem
            icon={<IconPortas />}
            title="Portas"
            total={1}
            filter="portas"
          />
          <FilterItem
            icon={<IconTracao />}
            title="Tração"
            total={1}
            filter="tracao"
          /> */}
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
