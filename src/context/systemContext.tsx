import { createContext, ReactNode, useState } from "react";

type SystemContextType = {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
};

export const SystemContext = createContext({} as SystemContextType);

interface Props {
  children: ReactNode;
}

export const SystemContextProvider = ({ children }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <SystemContext.Provider
      value={{
        isDrawerOpen,
        toggleDrawer,
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};
