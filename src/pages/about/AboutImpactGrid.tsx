import { Box, Card, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import QueryStatsRounded from "@mui/icons-material/QueryStatsRounded";
import VerifiedRounded from "@mui/icons-material/VerifiedRounded";
import BusinessCenterRounded from "@mui/icons-material/BusinessCenterRounded";
import BoltRounded from "@mui/icons-material/BoltRounded";

const impactItems = [
  {
    icon: <BusinessCenterRounded fontSize="small" />,
    value: "6+ лет",
    label: "коммерческой разработки",
  },
  {
    icon: <BoltRounded fontSize="small" />,
    value: "3.0–3.5 с",
    label: "LCP после оптимизации",
  },
  {
    icon: <VerifiedRounded fontSize="small" />,
    value: "85%+",
    label: "покрытие тестами",
  },
  {
    icon: <QueryStatsRounded fontSize="small" />,
    value: "3 компании",
    label: "продуктовый и enterprise опыт",
  },
];

export const AboutImpactGrid = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 1.5,
        gridTemplateColumns: { xs: "1fr 1fr", xl: "repeat(4, 1fr)" },
        mb: 3,
        animation: "cardReveal 620ms ease-out 200ms both",
      }}>
      {impactItems.map((item, index) => (
        <Box key={item.value} sx={{ animation: `cardReveal 620ms ease-out ${260 + index * 90}ms both` }}>
          <Card
            sx={(theme) => ({
              position: "relative",
              overflow: "hidden",
              color: "text.primary",
              background: `linear-gradient(155deg, ${alpha(theme.palette.background.paper, 0.98)} 0%, ${alpha(theme.palette.primary.main, theme.palette.mode === "light" ? 0.08 : 0.16)} 100%)`,
              border: "1px solid",
              borderColor: alpha(theme.palette.divider, 0.8),
              boxShadow:
                theme.palette.mode === "light"
                  ? "0 18px 42px rgba(15, 23, 42, 0.1)"
                  : "0 18px 42px rgba(0, 0, 0, 0.34)",
              transition: "transform 220ms ease, box-shadow 220ms ease",
              willChange: "transform",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow:
                  theme.palette.mode === "light"
                    ? "0 24px 52px rgba(15, 23, 42, 0.14)"
                    : "0 24px 52px rgba(0, 0, 0, 0.42)",
              },
            })}>
            <Box sx={{ p: 1.75 }}>
              <Box
                sx={(theme) => ({
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 34,
                  height: 34,
                  mb: 1.25,
                  borderRadius: 999,
                  color: "primary.main",
                  bgcolor: alpha(theme.palette.primary.main, theme.palette.mode === "light" ? 0.1 : 0.18),
                })}>
                {item.icon}
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.1 }}>
                {item.value}
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5, color: "text.secondary", lineHeight: 1.5 }}>
                {item.label}
              </Typography>
            </Box>
          </Card>
        </Box>
      ))}
    </Box>
  );
};
