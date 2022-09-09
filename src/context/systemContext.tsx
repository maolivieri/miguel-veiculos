import { createContext, ReactNode, useState } from "react";

type SystemContextType = {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  isFiltersOpen: boolean;
  toggleFilters: () => void;
};

export const SystemContext = createContext({} as SystemContextType);

interface Props {
  children: ReactNode;
}

export const SystemContextProvider = ({ children }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFiltersOpen, setIsFilterOpen] = useState(false);

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
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};
