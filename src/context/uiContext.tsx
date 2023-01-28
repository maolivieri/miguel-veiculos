import { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

type ContextType = {
  isLoading: Boolean;
  startLoading: () => void;
  stopLoading: () => void;
};
export const UIContext = createContext({} as ContextType);

export const UIContextProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  function startLoading() {
    setIsLoading(true);
  }

  function stopLoading() {
    setIsLoading(false);
  }

  return (
    <UIContext.Provider
      value={{
        startLoading,
        stopLoading,
        isLoading,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
