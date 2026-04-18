import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Tooltip,
  Button,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import {
  Brightness4,
  Brightness7,
  BrightnessAuto,
  PersonRounded,
  WorkHistoryRounded,
} from "@mui/icons-material";
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
    <AppBar
      position="sticky"
      color="transparent"
      sx={(theme) => ({
        bgcolor: theme.palette.mode === "light" ? "grey.200" : "background.paper",
        color: "text.primary",
        borderBottom: 1,
        borderColor: "divider",
        backdropFilter: "blur(18px)",
        animation: "cardReveal 520ms ease-out both",
      })}>
      <Toolbar
        component={Container}
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
        <Box>
          <Box sx={{ fontWeight: 800, fontSize: { xs: "1.2rem", md: "1.45rem" }, letterSpacing: "-0.03em" }}>
            Портфолио
          </Box>
          <Box sx={{ color: "text.secondary", fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Frontend / Fullstack
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 1.25, alignItems: "center" }}>
          <Box
            sx={(theme) => ({
              display: "inline-flex",
              gap: 0.75,
              p: 0.5,
              borderRadius: 999,
              bgcolor: alpha(theme.palette.background.paper, 0.72),
              border: "1px solid",
              borderColor: alpha(theme.palette.divider, 0.9),
              boxShadow:
                theme.palette.mode === "light"
                  ? "0 8px 20px rgba(15, 23, 42, 0.08)"
                  : "0 8px 20px rgba(0, 0, 0, 0.28)",
              backdropFilter: "blur(18px)",
            })}>
            <Button
              startIcon={<PersonRounded fontSize="small" />}
              onClick={() => onSectionChange("about")}
              sx={(theme) => ({
                color: activeSection === "about" ? "common.white" : "text.secondary",
                fontSize: "0.98rem",
                fontWeight: 700,
                textTransform: "none",
                minWidth: { xs: 112, md: 128 },
                borderRadius: 999,
                px: 1.8,
                py: 0.9,
                ...(activeSection === "about"
                  ? {
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                    }
                  : {
                      bgcolor: "transparent",
                    }),
                boxShadow:
                  activeSection === "about"
                    ? "0 10px 24px rgba(25, 118, 210, 0.28)"
                    : "none",
                transition: "background-color 180ms ease, color 180ms ease, transform 180ms ease, box-shadow 180ms ease",
                "&:hover": {
                  ...(activeSection === "about"
                    ? {
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                      }
                    : {
                        bgcolor: "action.hover",
                      }),
                  transform: "translateY(-1px)",
                  boxShadow:
                    activeSection === "about"
                      ? "0 12px 26px rgba(25, 118, 210, 0.34)"
                      : "none",
                },
              })}>
              Обо мне
            </Button>

            <Button
              startIcon={<WorkHistoryRounded fontSize="small" />}
              onClick={() => onSectionChange("works")}
              sx={(theme) => ({
                color: activeSection === "works" ? "common.white" : "text.secondary",
                fontSize: "0.98rem",
                fontWeight: 700,
                textTransform: "none",
                minWidth: { xs: 112, md: 128 },
                borderRadius: 999,
                px: 1.8,
                py: 0.9,
                ...(activeSection === "works"
                  ? {
                      background: `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.success.dark})`,
                    }
                  : {
                      bgcolor: "transparent",
                    }),
                boxShadow:
                  activeSection === "works"
                    ? "0 10px 24px rgba(46, 125, 50, 0.28)"
                    : "none",
                transition: "background-color 180ms ease, color 180ms ease, transform 180ms ease, box-shadow 180ms ease",
                "&:hover": {
                  ...(activeSection === "works"
                    ? {
                        background: `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.success.dark})`,
                      }
                    : {
                        bgcolor: "action.hover",
                      }),
                  transform: "translateY(-1px)",
                  boxShadow:
                    activeSection === "works"
                      ? "0 12px 26px rgba(46, 125, 50, 0.32)"
                      : "none",
                },
              })}>
              Опыт
            </Button>
          </Box>

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
