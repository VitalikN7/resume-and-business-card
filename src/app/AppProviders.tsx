import type { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { SectionProvider } from "@shared/lib/SectionProvider";
import { useThemeMode } from "@shared/lib/ThemeContext";
import { ThemeContextProvider } from "@shared/lib/ThemeContextProvider";
import { darkTheme, lightTheme } from "@shared/ui/theme";

interface AppProvidersProps {
  children: ReactNode;
}

const MuiAppThemeProvider = ({ children }: AppProvidersProps) => {
  const { isDarkMode } = useThemeMode();

  return (
    <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ThemeContextProvider>
      <MuiAppThemeProvider>
        <SectionProvider>{children}</SectionProvider>
      </MuiAppThemeProvider>
    </ThemeContextProvider>
  );
};
