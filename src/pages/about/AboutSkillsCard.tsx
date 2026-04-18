import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

const skills = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "Webpack",
  "Vite",
  "TypeScript",
  "Docker",
  "Git",
  "React",
  "Next.js",
  "NestJS",
  "Redux",
  "WebSocket",
  "REST API",
  "Node.js",
  "CI/CD",
  "API",
];

interface AboutSkillsCardProps {
  compact?: boolean;
}

export const AboutSkillsCard = ({ compact = false }: AboutSkillsCardProps) => {
  return (
    <Card
      sx={(theme) => ({
        color: "text.primary",
        background: `linear-gradient(160deg, ${alpha(theme.palette.success.main, theme.palette.mode === "light" ? 0.1 : 0.18)} 0%, ${alpha(theme.palette.background.paper, 0.96)} 52%, ${alpha(theme.palette.primary.main, theme.palette.mode === "light" ? 0.08 : 0.16)} 100%)`,
        border: "1px solid",
        borderColor: alpha(theme.palette.divider, 0.8),
        boxShadow:
          theme.palette.mode === "light"
            ? "0 14px 36px rgba(15, 23, 42, 0.08)"
            : "0 14px 36px rgba(0, 0, 0, 0.28)",
        transition: "transform 220ms ease, box-shadow 220ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow:
            theme.palette.mode === "light"
              ? "0 18px 42px rgba(15, 23, 42, 0.12)"
              : "0 18px 42px rgba(0, 0, 0, 0.34)",
        },
      })}>
      <CardContent sx={{ p: compact ? 2 : 3, "&:last-child": { pb: compact ? 2 : 3 } }}>
        <Typography variant={compact ? "h6" : "h5"} sx={{ mb: compact ? 1.5 : 2, color: "text.primary" }}>
          Навыки
        </Typography>
        <Stack direction="row" spacing={compact ? 0.75 : 1} useFlexGap sx={{ flexWrap: "wrap" }}>
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              variant="outlined"
              size={compact ? "small" : "medium"}
              sx={(theme) => ({
                height: compact ? 28 : 32,
                borderColor: alpha(theme.palette.primary.main, theme.palette.mode === "light" ? 0.18 : 0.32),
                bgcolor: alpha(theme.palette.primary.main, theme.palette.mode === "light" ? 0.04 : 0.1),
                transition: "transform 180ms ease, background-color 180ms ease",
                "& .MuiChip-label": {
                  px: compact ? 1 : 1.25,
                  fontSize: compact ? "0.78rem" : "0.84rem",
                },
                "&:hover": {
                  transform: "translateY(-1px)",
                  bgcolor: alpha(theme.palette.primary.main, theme.palette.mode === "light" ? 0.08 : 0.16),
                },
              })}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};
