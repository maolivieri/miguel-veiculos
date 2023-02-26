import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type SortOptions =
  | "az"
  | "menorpreco"
  | "maiorpreco"
  | "menorano"
  | "menorkm"
  | null;

export type FilterOptions =
  | "preco"
  | "ano"
  | "km"
  | "carroceria"
  | "opcionais"
  | "marca"
  | "cambio"
  | "combustivel"
  | "cor"
  | "documentacao"
  | "potencia"
  | "portas"
  | "tracao"
  | null;

export type FiltersIndexes =
  | "minPrice"
  | "maxPrice"
  | "startYear"
  | "endYear"
  | "kmStart"
  | "kmEnd"
  | "carrocerias"
  | "marcas"
  | "cambios"
  | "combustiveis"
  | "cores"
  | "essenciais"
  | "conforto"
  | "tecnologia"
  | "seguranca"
  | "documentacoes";

export interface Filters {
  minPrice: number | null;
  maxPrice: number | null;
  startYear: number | null;
  endYear: number | null;
  kmStart: number | null;
  kmEnd: number | null;
  carrocerias: string[];
  marcas: string[];
  cambios: string[];
  combustiveis: string[];
  cores: string[];
  essenciais: string[];
  conforto: string[];
  tecnologia: string[];
  seguranca: string[];
  documentacoes: string[];
}

export interface FiltersRange {
  minPrice: number | null;
  maxPrice: number | null;
  minYear: number | null;
  maxYear: number | null;
  minKM: number | null;
  maxKM: number | null;
}

type SystemContextType = {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  isFiltersOpen: boolean;
  toggleFilters: () => void;
  focusedFilter: FilterOptions;
  setFocusedFilter: Dispatch<SetStateAction<FilterOptions>>;
  activeFilters: Filters;
  setActiveFilters: Dispatch<SetStateAction<Filters>>;
  filterRanges: FiltersRange;
  setFilterRanges: Dispatch<SetStateAction<FiltersRange>>;
  listSort: SortOptions;
  setListSort: Dispatch<SetStateAction<SortOptions>>;
};

export const SystemContext = createContext({} as SystemContextType);

interface Props {
  children: ReactNode;
}

//cor
// cor {nome cor { hex }}
//documentation
// documentacoes { nome }
//cambio
//carroceria
//combustivel
export const initialFilterRanges = {
  minPrice: null,
  maxPrice: null,
  minYear: null,
  maxYear: null,
  minKM: null,
  maxKM: null,
};

export const initialFiltersValue = {
  minPrice: null,
  maxPrice: null,
  startYear: null,
  endYear: null,
  kmStart: null,
  kmEnd: null,
  carrocerias: [],
  marcas: [],
  cambios: [],
  combustiveis: [],
  cores: [],
  conforto: [],
  tecnologia: [],
  seguranca: [],
  essenciais: [],
  documentacoes: [],
};

export const SystemContextProvider = ({ children }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFiltersOpen, setIsFilterOpen] = useState(false);
  const [focusedFilter, setFocusedFilter] = useState<FilterOptions>(null);
  const [activeFilters, setActiveFilters] =
    useState<Filters>(initialFiltersValue);
  const [filterRanges, setFilterRanges] =
    useState<FiltersRange>(initialFilterRanges);
  const [listSort, setListSort] = useState<SortOptions>(null);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const toggleFilters = () => {
    setIsFilterOpen((prevState) => !prevState);
  };

  return (
    <SystemContext.Provider
      value={{
        isDrawerOpen,
        toggleDrawer,
        isFiltersOpen,
        toggleFilters,
        focusedFilter,
        setFocusedFilter,
        activeFilters,
        setActiveFilters,
        filterRanges,
        setFilterRanges,
        listSort,
        setListSort,
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};
