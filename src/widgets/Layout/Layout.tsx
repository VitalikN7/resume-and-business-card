import type { ReactNode } from "react";
import { Box, Container } from "@mui/material";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useSection } from "@shared/lib/SectionContext";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { activeSection, setActiveSection } = useSection();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />

      <Box component="main" sx={{ flex: 1, py: 4 }}>
        <Container maxWidth="lg">{children}</Container>
      </Box>

      <Footer />
    </Box>
  );
};

export { Header, Footer };
export type { LayoutProps };
