import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type OverlayContextType = {
  openModals: string[];
  handleWindow: (name: string) => void;
  closeWindow: (name: string) => void;
};

const WindowManagerContext = createContext<OverlayContextType | undefined>(undefined);

export const WindowManagerProvider = ({ children }: { children: ReactNode }) => {
    const [openModals, setOpenModals] = useState<string[]>([]);

    const handleWindow = (name: string) => {
        //setOpenModals(prev => [...prev, name]);

        setOpenModals(prev => {
            if (prev.includes(name)) {
                return prev.filter(n => n !== name);
            } else {
                return [...prev, name];
            }
        });
    };

    const closeWindow = (name: string) => {
        setOpenModals(prev => prev.filter(n => n !== name));
    };


  return (
    <WindowManagerContext.Provider value={{ openModals, handleWindow, closeWindow }}>
      {children}
    </WindowManagerContext.Provider>
  );
};

export const useWindowManager = () => {
  const context = useContext(WindowManagerContext);
  if (!context) throw new Error("useWindowManager must be used within WindowManagerProvider");
  return context;
};