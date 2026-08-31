import { useState } from "react";
import type { ReactNode } from "react";
import { SectionContext } from "./SectionContext";
import type { SectionId } from "./SectionContext";

export const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<SectionId>("about");

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
};
