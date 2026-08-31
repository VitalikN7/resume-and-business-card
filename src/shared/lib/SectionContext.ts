import { createContext, useContext } from "react";

export type SectionId = "about" | "works";

interface SectionContextType {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
}

export const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const useSection = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSection must be used within SectionProvider");
  }
  return context;
};
