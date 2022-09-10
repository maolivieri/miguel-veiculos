import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type FilterOptions =
  | "preco"
  | "ano"
  | "km"
  | "carroceria"
  | "essenciais"
  | "conforto"
  | "tecnologia"
  | "seguranca"
  | "marca"
  | " cambio"
  | "combustivel"
  | "cor"
  | "documentacao"
  | "potencia"
  | "portas"
  | "tracao"
  | null;

interface Filters {
  minPrice: number | null;
  maxPrice: number | null;
  startYear: number | null;
  endYear: number | null;
  kmStart: number | null;
  kmEnd: number | null;
  carrocerias: string[];
  marcas: string[];
  cambios: string[];
  combustíveis: string[];
  cores: string[];
  essenciais: string[];
  conforto: string[];
  tecnologia: string[];
  seguranca: string[];
  documentacoes: string[];
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

export const SystemContextProvider = ({ children }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFiltersOpen, setIsFilterOpen] = useState(false);
  const [focusedFilter, setFocusedFilter] = useState<FilterOptions>(null);
  const [activeFilters, setActiveFilters] = useState<Filters>({
    minPrice: null,
    maxPrice: null,
    startYear: null,
    endYear: null,
    kmStart: null,
    kmEnd: null,
    carrocerias: [],
    marcas: [],
    cambios: [],
    combustíveis: [],
    cores: [],
    conforto: [],
    tecnologia: [],
    seguranca: [],
    essenciais: [],
    documentacoes: [],
  });

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
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};
