import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

type Display = "grid" | "list";

type ContextType = {
  isLoading: Boolean;
  startLoading: () => void;
  stopLoading: () => void;
  display: Display;
  setDisplay: Dispatch<SetStateAction<Display>>;
};

export const UIContext = createContext({} as ContextType);

export const UIContextProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [display, setDisplay] = useState<Display>("grid");

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
        display,
        setDisplay,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
