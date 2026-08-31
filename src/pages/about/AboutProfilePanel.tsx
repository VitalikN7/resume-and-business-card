import { Box, Card, CardContent, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { profileSections, profileTags } from "./aboutData";

export const AboutProfilePanel = () => {
  return (
    <Card
      sx={(theme) => ({
        mb: 3,
        color: "text.primary",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(160deg, ${alpha(theme.palette.primary.main, theme.palette.mode === "light" ? 0.1 : 0.18)} 0%, ${alpha(theme.palette.background.paper, 0.96)} 48%, ${alpha(theme.palette.success.main, theme.palette.mode === "light" ? 0.08 : 0.16)} 100%)`,
        border: "1px solid",
        borderColor: alpha(theme.palette.divider, 0.8),
        boxShadow:
          theme.palette.mode === "light"
            ? "0 18px 42px rgba(15, 23, 42, 0.1)"
            : "0 18px 42px rgba(0, 0, 0, 0.34)",
        transition: "transform 220ms ease, box-shadow 220ms ease",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          height: 4,
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.success.main})`,
        },
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow:
            theme.palette.mode === "light"
              ? "0 24px 52px rgba(15, 23, 42, 0.14)"
              : "0 24px 52px rgba(0, 0, 0, 0.42)",
        },
      })}>
      <CardContent
        sx={{ p: { xs: 2.5, md: 3.25 }, "&:last-child": { pb: { xs: 2.5, md: 3.25 } } }}>
        <Typography variant="h5" sx={{ mb: 1.5, color: "text.primary" }}>
          Коротко обо мне
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1.5 }}>
          {profileTags.map((item) => (
            <Box
              key={item}
              sx={(theme) => ({
                px: 1.25,
                py: 0.5,
                borderRadius: 999,
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "text.secondary",
                bgcolor: alpha(
                  theme.palette.primary.main,
                  theme.palette.mode === "light" ? 0.08 : 0.16,
                ),
                border: "1px solid",
                borderColor: alpha(
                  theme.palette.primary.main,
                  theme.palette.mode === "light" ? 0.16 : 0.3,
                ),
              })}>
              {item}
            </Box>
          ))}
        </Box>

        <Typography variant="h6" sx={{ mb: 1.5, color: "text.primary", fontWeight: 700 }}>
          Frontend / Fullstack - разработчик с опытом более 5 лет
        </Typography>

        {profileSections.map((section, index) => (
          <Box
            key={section.title}
            sx={{ mb: index === profileSections.length - 1 ? 0 : 2.5 }}>
            <Typography
              variant="subtitle2"
              sx={{
                mb: 1,
                color: "text.secondary",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}>
              {section.title}
            </Typography>
            <Box component="ul" sx={{ pl: 3, color: "text.primary" }}>
              {section.items.map((item) => (
                <li key={item}>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    {item}
                  </Typography>
                </li>
              ))}
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};
