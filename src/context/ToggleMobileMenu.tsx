import { createContext, useState, ReactNode } from "react";

interface ToggleMobileMenuContextType {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleMobileMenuContext = createContext<ToggleMobileMenuContextType>({
  show: false,
  setShow: () => {}, // Placeholder function
});

interface ToggleMobileMenuProviderProps {
  children: ReactNode;
}

const ToggleMobileMenuContextProvider = ({
  children,
}: ToggleMobileMenuProviderProps) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <ToggleMobileMenuContext.Provider value={{ show, setShow }}>
      {children}
    </ToggleMobileMenuContext.Provider>
  );
};

export const ToggleMobileMenu = ToggleMobileMenuContext;

export default ToggleMobileMenuContextProvider;
