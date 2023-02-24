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
import { CheckboxFilter } from "./components/CheckboxFilter";

export function FiltersDrawer() {
  const { toggleFilters, setActiveFilters, activeFilters } =
    useContext(SystemContext);
  const {
    carrocerias,
    marcas,
    cambios,
    confortos,
    essenciais,
    segurancas,
    tecnologias,
    combustivels,
    cors,
    documentacoes,
  } = useContext(ListsContext);

  const countActiveFilters = countValidFilters(activeFilters);
  const activeFiltersString = !!countActiveFilters
    ? ` (${countActiveFilters})`
    : "";

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>
          <h3>{`Filtros${activeFiltersString}`}</h3>
          <CloseButton onClick={toggleFilters} />
        </div>
        {!!countActiveFilters && (
          <p onClick={() => setActiveFilters(initialFiltersValue)}>
            Limpar filtros
          </p>
        )}
      </div>
      <div className={styles.line} />
      <div className={styles.body}>
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
            filters={activeFilters}
            setFilters={setActiveFilters}
            fieldName="carrocerias"
            items={carrocerias.map((x) => ({
              name: x.nome,
              icon: x.icon?.url,
            }))}
          />
        </FilterItem>
        <FilterItem
          icon={<IconOpcionais />}
          title="Opcionais"
          countSelected={0}
          multi
        >
          <CheckboxFilter
            filters={activeFilters}
            setFilters={setActiveFilters}
            fieldName="conforto"
            items={confortos.map((x) => x.nome)}
            title="Conforto"
          />
          <CheckboxFilter
            filters={activeFilters}
            setFilters={setActiveFilters}
            fieldName="essenciais"
            items={essenciais.map((x) => x.nome)}
            title="Essenciais"
          />
          <CheckboxFilter
            filters={activeFilters}
            setFilters={setActiveFilters}
            fieldName="seguranca"
            items={segurancas.map((x) => x.nome)}
            title="Segurança"
          />
          <CheckboxFilter
            filters={activeFilters}
            setFilters={setActiveFilters}
            fieldName="tecnologia"
            items={tecnologias.map((x) => x.nome)}
            title="Tecnologia"
          />
        </FilterItem>
        <FilterItem icon={<IconMarca />} title="Marcas" countSelected={1}>
          <MultiSelectFilter
            filters={activeFilters}
            setFilters={setActiveFilters}
            fieldName="marcas"
            items={marcas.map((x) => ({
              name: x.nome,
              icon: x.logo?.url,
            }))}
          />
        </FilterItem>
        <FilterItem icon={<IconCambio />} title="Câmbio" countSelected={1}>
          <CheckboxFilter
            items={cambios.map((x) => x.nome)}
            filters={activeFilters}
            setFilters={setActiveFilters}
            fieldName="cambios"
          />
        </FilterItem>
        <FilterItem
          icon={<IconCombustivel />}
          title="Combustivel"
          countSelected={1}
        >
          <CheckboxFilter
            items={combustivels.map((x) => x.nome)}
            filters={activeFilters}
            setFilters={setActiveFilters}
            fieldName="combustiveis"
          />
        </FilterItem>
        <FilterItem icon={<IconCor />} title="Cor" countSelected={1}>
          <MultiSelectFilter
            filters={activeFilters}
            setFilters={setActiveFilters}
            fieldName="cores"
            items={cors.map((x) => ({
              name: x.nome,
              icon: x.cor.hex,
            }))}
            color
          />
        </FilterItem>
        <FilterItem
          icon={<IconDocumentation />}
          title="Documentação"
          countSelected={1}
        >
          <CheckboxFilter
            items={documentacoes.map((x) => x.nome)}
            filters={activeFilters}
            setFilters={setActiveFilters}
            fieldName="documentacoes"
          />
        </FilterItem>
      </div>
    </div>
  );
}
