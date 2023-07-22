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
  IconPreco,
} from "../../design/Icons";

import { HiX } from "react-icons/hi";
import { countValidFilters } from "../../lib/countValidFilters";

export function FiltersModal() {
  const { toggleFilters, setActiveFilters, activeFilters } =
    useContext(SystemContext);

  return (
    <>
      <div className={styles.dropShaddow} onClick={toggleFilters} />
      <div className={`${styles.main}`}>
        
        <div className={styles.header}>
        <h3 className={styles.title}>Filtros</h3>
        <div className={styles.closeArrow} onClick={toggleFilters}>
          <HiX size="1.5rem" />
        </div>
        </div>
        <div className={`${styles.filterWrapper}`}>
          <FilterItem
            icon={<IconPreco />}
            title="Preço"
            total={
              (activeFilters.minPrice || activeFilters.maxPrice) && "active"
            }
            filter="preco"
          />
          <FilterItem
            icon={<IconAno />}
            title="Ano"
            total={
              (activeFilters.startYear || activeFilters.endYear) && "active"
            }
            filter="ano"
          />
          <FilterItem
            icon={<IconKM />}
            title="KM"
            total={(activeFilters.kmStart || activeFilters.kmEnd) && "active"}
            filter="km"
          />
          <FilterItem
            icon={<IconCarroceria />}
            title="Carroceria"
            total={activeFilters.carrocerias.length}
            filter="carroceria"
          />
          <FilterItem
            icon={<IconOpcionais />}
            title="Opcionais"
            total={
              (activeFilters.conforto.length ||
                activeFilters.tecnologia.length ||
                activeFilters.seguranca.length ||
                activeFilters.essenciais.length) &&
              "active"
            }
            filter="opcionais"
          />
          <FilterItem
            icon={<IconMarca />}
            title="Marca"
            total={activeFilters.marcas.length}
            filter="marca"
          />
          <FilterItem
            icon={<IconCambio />}
            title="Câmbio"
            total={activeFilters.cambios.length}
            filter="cambio"
          />
          <FilterItem
            icon={<IconCombustivel />}
            title="Combustível"
            total={activeFilters.combustiveis.length}
            filter="combustivel"
          />
          <FilterItem
            icon={<IconCor />}
            title="Cor"
            total={activeFilters.cores.length}
            filter="cor"
          />
          <FilterItem
            icon={<IconDocumentation />}
            title="Documentação"
            total={activeFilters.documentacoes.length}
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
          <ButtonSecondary
            text="Limpar filtros"
            onClick={() => setActiveFilters(initialFiltersValue)}
            disabled={countValidFilters(activeFilters) === 0}
          />
          <ButtonPrimary text="Filtrar" onClick={toggleFilters} />
        </div>
      </div>
      <FilterWrapper />
    </>
  );
}
