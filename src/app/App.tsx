//* providers
import { Box } from "@mui/material";
import { ThemeContextProvider } from "@shared/lib/ThemeContext";
import { SectionProvider } from "@shared/lib/SectionContext";
import { ThemeProvider } from "./providers/theme/ThemeProvider";
import { RouterProvider } from "./providers/router/RouterProvider";

export const App = () => {
  return (
    <ThemeContextProvider>
      <ThemeProvider>
        <SectionProvider>
          <Box sx={{ backgroundColor: "background.default", minHeight: "100vh" }}>
            <RouterProvider />
          </Box>
        </SectionProvider>
      </ThemeProvider>
    </ThemeContextProvider>
  );
};
