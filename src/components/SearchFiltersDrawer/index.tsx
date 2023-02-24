import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  initialFiltersValue,
  SystemContext,
} from "../../context/systemContext";

import { CloseButton } from "../../design/CloseButton";
import { countValidFilters } from "../../lib/countValidFilters";
import { FilterItem } from "./components/FilterItem";
import { InputFilter } from "./components/InputFilter.tsx";

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
import { MultiSelectFilter } from "./components/MultiSelectFilter";
import { ListsContext } from "../../context/listsContext";

export function FiltersDrawer() {
  const { toggleFilters, setActiveFilters, activeFilters } =
    useContext(SystemContext);
  const { carrocerias, marcas } = useContext(ListsContext);

  const countActiveFilters = countValidFilters(activeFilters);

  return (
    <div>
      <div className={styles.closeButton} onClick={toggleFilters}>
        <CloseButton />
      </div>
      <div className={styles.header}>
        <h6>{`Filtros (${countActiveFilters})`}</h6>
        <p onClick={() => setActiveFilters(initialFiltersValue)}>
          Limpar Filtros
        </p>
      </div>
      <div className={styles.line} />
      <FilterItem icon={<IconPreco />} title="Preço" countSelected={1}>
        <InputFilter
          filters={activeFilters}
          setFilters={setActiveFilters}
          format=""
          minValue="R$ 0,00"
          maxValue="R$ 200.000,00"
          placeholder="Preço"
          value1Name="minPrice"
          value2Name="maxPrice"
          price
        />
      </FilterItem>
      <FilterItem icon={<IconAno />} title="Ano" countSelected={1}>
        <InputFilter
          filters={activeFilters}
          setFilters={setActiveFilters}
          format=""
          minValue="1970"
          maxValue={String(new Date().getFullYear())}
          placeholder="Ano"
          value1Name="startYear"
          value2Name="endYear"
        />
      </FilterItem>
      <FilterItem icon={<IconKM />} title="KM" countSelected={0}>
        <InputFilter
          filters={activeFilters}
          setFilters={setActiveFilters}
          format=""
          minValue="0"
          maxValue="0"
          placeholder="KM"
          value1Name="kmStart"
          value2Name="kmEnd"
        />
      </FilterItem>
      <FilterItem
        icon={<IconCarroceria />}
        title="Carroceria"
        countSelected={1}
      >
        <MultiSelectFilter
          items={carrocerias.map((x) => ({ name: x.nome, icon: x.icon?.url }))}
        />
      </FilterItem>
    </div>
  );
}
