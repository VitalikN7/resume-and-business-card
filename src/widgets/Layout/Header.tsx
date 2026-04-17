import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Tooltip,
  Button,
} from "@mui/material";
import { Brightness4, Brightness7, BrightnessAuto } from "@mui/icons-material";
import { useThemeMode } from "@shared/lib/ThemeContext";

interface HeaderProps {
  activeSection: "about" | "works";
  onSectionChange: (section: "about" | "works") => void;
}

export const Header = ({ activeSection, onSectionChange }: HeaderProps) => {
  const { themeMode, toggleTheme } = useThemeMode();

  const getThemeIcon = () => {
    switch (themeMode) {
      case "light":
        return <Brightness7 />;
      case "dark":
        return <Brightness4 />;
      case "system":
        return <BrightnessAuto />;
    }
  };

  const getThemeLabel = () => {
    const labels: Record<string, string> = {
      light: "Светлая тема",
      dark: "Темная тема",
      system: "Системная тема",
    };
    return labels[themeMode];
  };

  return (
    <AppBar position="sticky">
      <Toolbar
        component={Container}
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ fontWeight: 700, fontSize: "1.5rem" }}>Портфолио</Box>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button
            color={activeSection === "about" ? "primary" : "inherit"}
            onClick={() => onSectionChange("about")}
            sx={{
              fontSize: "1rem",
              fontWeight: activeSection === "about" ? 700 : 500,
              textTransform: "none",
              borderBottom: activeSection === "about" ? "2px solid" : "none",
              borderColor: "primary.main",
            }}>
            Обо мне
          </Button>

          <Button
            color={activeSection === "works" ? "primary" : "inherit"}
            onClick={() => onSectionChange("works")}
            sx={{
              fontSize: "1rem",
              fontWeight: activeSection === "works" ? 700 : 500,
              textTransform: "none",
              borderBottom: activeSection === "works" ? "2px solid" : "none",
              borderColor: "primary.main",
            }}>
            Работы
          </Button>

          <Tooltip title={getThemeLabel()}>
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              sx={{
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}>
              {getThemeIcon()}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
