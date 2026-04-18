import { Box, Card, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useSection } from "@shared/lib/SectionContext";
import avatarImage from "@/assets/avatar.jpg";
import { AboutContactsCard } from "./about/AboutContactsCard";
import { AboutImpactGrid } from "./about/AboutImpactGrid";
import { AboutProfilePanel } from "./about/AboutProfilePanel";
import { AboutSkillsCard } from "./about/AboutSkillsCard";

export const AboutSection = () => {
  const { activeSection } = useSection();

  if (activeSection !== "about") return null;

  return (
    <Box
      sx={{
        color: "text.primary",
        animation: "sectionReveal 720ms ease-out both",
      }}>
      <Typography
        variant="overline"
        sx={{
          display: "inline-block",
          mb: 3,
          px: 2.2,
          py: 0.8,
          borderRadius: 999,
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: "0.14em",
          color: "text.secondary",
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          animation: "cardReveal 560ms ease-out 120ms both",
        }}>
        Обо мне
      </Typography>

      <AboutImpactGrid />

      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1.45fr) minmax(320px, 0.9fr)" },
          alignItems: "flex-start",
        }}>
        <Box sx={{ animation: "cardReveal 700ms ease-out 220ms both" }}>
          <AboutProfilePanel />
        </Box>

        <Box
          sx={{
            animation: "cardReveal 760ms ease-out 320ms both",
          }}>
          <Box sx={{ width: "100%", display: "grid", gap: 2.5 }}>
            <Box
              sx={{
                display: "grid",
                gap: 2.5,
                gridTemplateColumns: { xs: "1fr", md: "minmax(150px, 180px) 1fr" },
                alignItems: "stretch",
              }}>
              <Card
                sx={(theme) => ({
                  width: "100%",
                  overflow: "hidden",
                  background: `linear-gradient(160deg, ${alpha(theme.palette.primary.main, theme.palette.mode === "light" ? 0.12 : 0.2)} 0%, ${alpha(theme.palette.background.paper, 0.96)} 42%, ${alpha(theme.palette.success.main, theme.palette.mode === "light" ? 0.1 : 0.18)} 100%)`,
                  alignSelf: "start",
                  border: "1px solid",
                  borderColor: alpha(theme.palette.divider, 0.8),
                  boxShadow:
                    theme.palette.mode === "light"
                      ? "0 18px 40px rgba(18, 38, 63, 0.12)"
                      : "0 18px 40px rgba(0, 0, 0, 0.32)",
                  transition: "transform 220ms ease, box-shadow 220ms ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow:
                      theme.palette.mode === "light"
                        ? "0 22px 48px rgba(18, 38, 63, 0.16)"
                        : "0 22px 48px rgba(0, 0, 0, 0.4)",
                  },
                })}>
                <Box
                  component="img"
                  src={avatarImage}
                  alt="Аватар"
                  sx={{
                    width: "100%",
                    aspectRatio: { xs: "4 / 5", md: "3 / 4" },
                    display: "block",
                    objectFit: "cover",
                    transform: "scale(1.01)",
                  }}
                />
              </Card>

              <AboutContactsCard compact />
            </Box>

            <AboutSkillsCard compact />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
