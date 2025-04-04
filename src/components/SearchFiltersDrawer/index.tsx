import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  initialFiltersValue,
  SystemContext,
} from "../../context/systemContext";

import { CloseButton } from "../../design/CloseButton";
import { countValidFilters } from "../../lib/countValidFilters";
import { FilterItem } from "./components/FilterItem";
import { YearInput } from "./components/YearInput";

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
import { toCurrency } from "../../lib/formatInputCurrency";
import { formatToBigNumber } from "../../lib/formatBigNumber";
import { PriceInput } from "./components/PriceInput";
import { NumberInput } from "./components/NumberInput";

export function FiltersDrawer() {
  const { toggleFilters, setActiveFilters, activeFilters, filterRanges } =
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
        <FilterItem
          icon={<IconMarca size="1rem" />}
          title="Marcas"
          countSelected={activeFilters.marcas.length}
        >
          <MultiSelectFilter
            id="ga4_click_filter_marca"
            filters={activeFilters}
            setFilters={setActiveFilters}
            fieldName="marcas"
            items={marcas.map((x) => ({
              name: x.nome,
              icon: x.logo?.url,
            }))}
          />
        </FilterItem>
        <FilterItem
          icon={<IconPreco size="1rem" />}
          title="Preço"
          countSelected={
            activeFilters.minPrice || activeFilters.maxPrice ? 1 : 0
          }
        >
          <PriceInput
            id="ga4_click_filter_preco"
            filters={activeFilters}
            setFilters={setActiveFilters}
            minValue={toCurrency(String(filterRanges.minPrice))}
            maxValue={toCurrency(String(filterRanges.maxPrice))}
            placeholder="Preço"
            value1Name="minPrice"
            value2Name="maxPrice"
          />
        </FilterItem>
        <FilterItem
          icon={<IconAno size="1rem" />}
          title="Ano"
          countSelected={
            activeFilters.startYear || activeFilters.endYear ? 1 : 0
          }
        >
          <YearInput
            id="ga4_click_filter_ano"
            filters={activeFilters}
            setFilters={setActiveFilters}
            minValue={Number(filterRanges.minYear)}
            maxValue={Number(filterRanges.maxYear)}
            placeholder="Ano"
            value1Name="startYear"
            value2Name="endYear"
            maxLength={4}
          />
        </FilterItem>
        <FilterItem
          icon={<IconKM size="1rem" />}
          title="Quilometragem"
          countSelected={activeFilters.kmStart || activeFilters.kmEnd ? 1 : 0}
        >
          <NumberInput
            id="ga4_click_filter_km"
            filters={activeFilters}
            setFilters={setActiveFilters}
            minValue={`${formatToBigNumber(filterRanges.minKM)} km`}
            maxValue={`${formatToBigNumber(filterRanges.maxKM)} km`}
            placeholder="KM"
            value1Name="kmStart"
            value2Name="kmEnd"
          />
        </FilterItem>
        <FilterItem
          icon={<IconCarroceria size="1rem" />}
          title="Carroceria"
          countSelected={activeFilters.carrocerias.length}
        >
          <MultiSelectFilter
            id="ga4_click_filter_carroceria"
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
          icon={<IconCambio size="1rem" />}
          title="Câmbio"
          countSelected={activeFilters.cambios.length}
        >
          <CheckboxFilter
            id="ga4_click_filter_cambio"
            items={cambios.map((x) => x.nome)}
            filters={activeFilters}
            setFilters={setActiveFilters}
            fieldName="cambios"
          />
        </FilterItem>
        <FilterItem
          icon={<IconCombustivel size="1rem" />}
          title="Combustivel"
          countSelected={activeFilters.combustiveis.length}
        >
          <CheckboxFilter
            id="ga4_click_filter_combustivels"
            items={combustivels.map((x) => x.nome)}
            filters={activeFilters}
            setFilters={setActiveFilters}
            fieldName="combustiveis"
          />
        </FilterItem>
        <FilterItem
          icon={<IconCor size="1rem" />}
          title="Cor"
          countSelected={activeFilters.cores.length}
        >
          <MultiSelectFilter
            id="ga4_click_filter_cor"
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
          icon={<IconOpcionais size="1rem" />}
          title="Opcionais"
          countSelected={
            activeFilters.conforto.length +
            activeFilters.essenciais.length +
            activeFilters.seguranca.length +
            activeFilters.tecnologia.length
          }
          multi
        >
          <CheckboxFilter
            id="ga4_click_filter_confort"
            filters={activeFilters}
            setFilters={setActiveFilters}
            fieldName="conforto"
            items={confortos.map((x) => x.nome)}
            title="Conforto"
          />
          <CheckboxFilter
            id="ga4_click_filter_essential"
            filters={activeFilters}
            setFilters={setActiveFilters}
            fieldName="essenciais"
            items={essenciais.map((x) => x.nome)}
            title="Essenciais"
          />
          <CheckboxFilter
            id="ga4_click_filter_safe"
            filters={activeFilters}
            setFilters={setActiveFilters}
            fieldName="seguranca"
            items={segurancas.map((x) => x.nome)}
            title="Segurança"
          />
          <CheckboxFilter
            id="ga4_click_filter_tech"
            filters={activeFilters}
            setFilters={setActiveFilters}
            fieldName="tecnologia"
            items={tecnologias.map((x) => x.nome)}
            title="Tecnologia"
          />
        </FilterItem>
        <FilterItem
          icon={<IconDocumentation size="1rem" />}
          title="Documentação"
          countSelected={activeFilters.documentacoes.length}
        >
          <CheckboxFilter
            id="ga4_click_filter_documentacao"
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
