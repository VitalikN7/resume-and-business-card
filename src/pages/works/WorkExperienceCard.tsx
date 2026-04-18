import { useState } from "react";
import KeyboardArrowDownRounded from "@mui/icons-material/KeyboardArrowDownRounded";
import { Box, Button, Card, CardContent, Chip, Collapse, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import type { WorkExperience } from "./types";

interface WorkExperienceCardProps {
  work: WorkExperience;
  delayMs?: number;
}

export const WorkExperienceCard = ({ work, delayMs = 0 }: WorkExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={(theme) => ({
        color: "text.primary",
        position: "relative",
        overflow: "hidden",
        bgcolor: alpha(theme.palette.background.paper, 0.94),
        border: "1px solid",
        borderColor: alpha(theme.palette.divider, 0.82),
        boxShadow:
          theme.palette.mode === "light"
            ? "0 18px 44px rgba(15, 23, 42, 0.08)"
            : "0 18px 44px rgba(0, 0, 0, 0.28)",
        animation: `cardReveal 720ms ease-out ${delayMs}ms both`,
        transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          height: 4,
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.success.main})`,
        },
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: alpha(theme.palette.primary.main, theme.palette.mode === "light" ? 0.22 : 0.36),
          boxShadow:
            theme.palette.mode === "light"
              ? "0 24px 54px rgba(15, 23, 42, 0.12)"
              : "0 24px 54px rgba(0, 0, 0, 0.36)",
        },
      })}>
      <CardContent sx={{ p: { xs: 2.5, md: 3 }, "&:last-child": { pb: { xs: 2.5, md: 3 } } }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "space-between",
            alignItems: "start",
            mb: 2,
          }}>
          <Box>
            <Typography variant="h5" sx={{ color: "text.primary" }}>
              {work.company}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "text.secondary" }}>
              {work.role}
            </Typography>
            <Typography
              variant="body2"
              sx={(theme) => ({
                mt: 0.75,
                display: "inline-flex",
                px: 1.2,
                py: 0.45,
                borderRadius: 999,
                color: "text.secondary",
                bgcolor: alpha(theme.palette.primary.main, theme.palette.mode === "light" ? 0.06 : 0.14),
                border: "1px solid",
                borderColor: alpha(theme.palette.primary.main, theme.palette.mode === "light" ? 0.14 : 0.24),
              })}>
              {work.project}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={(theme) => ({
              color: "text.secondary",
              whiteSpace: "nowrap",
              px: 1.2,
              py: 0.45,
              borderRadius: 999,
              bgcolor: alpha(theme.palette.success.main, theme.palette.mode === "light" ? 0.08 : 0.14),
            })}>
            {work.period}
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: "text.primary" }}>
          {work.summary}
        </Typography>

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
          {work.highlights.map((highlight) => (
            <Chip
              key={highlight}
              label={highlight}
              size="small"
              sx={(theme) => ({
                fontWeight: 700,
                color: theme.palette.mode === "light" ? "grey.900" : "grey.50",
                bgcolor: alpha(theme.palette.warning.main, theme.palette.mode === "light" ? 0.16 : 0.24),
                border: "1px solid",
                borderColor: alpha(theme.palette.warning.main, theme.palette.mode === "light" ? 0.28 : 0.36),
                "& .MuiChip-label": {
                  px: 1.1,
                },
              })}
            />
          ))}
        </Box>

        <Button
          variant="contained"
          endIcon={
            <KeyboardArrowDownRounded
              sx={{
                transition: "transform 220ms ease",
                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          }
          onClick={() => setIsExpanded((prev) => !prev)}
          sx={(theme) => ({
            px: 1.8,
            borderRadius: 999,
            bgcolor: theme.palette.mode === "light" ? "grey.900" : "primary.main",
            color: theme.palette.mode === "light" ? "grey.50" : "background.default",
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
              bgcolor: theme.palette.mode === "light" ? "grey.800" : "primary.light",
            },
          })}>
          {isExpanded ? "Скрыть" : "Подробнее"}
        </Button>

        <Collapse in={isExpanded} timeout={360}>
          <Box sx={{ display: "grid", gap: 2.5, pt: 2, mb: 3 }}>
            {work.sections.map((section) => (
              <Box key={section.title}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mb: 1,
                    fontWeight: 800,
                    color: "text.secondary",
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
          </Box>

          <Typography
            variant="subtitle2"
            sx={{
              mb: 1.5,
              fontWeight: 800,
              color: "text.secondary",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}>
            Стек
          </Typography>

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {work.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                variant="outlined"
                sx={(theme) => ({
                  borderColor: alpha(theme.palette.primary.main, theme.palette.mode === "light" ? 0.16 : 0.28),
                  bgcolor: alpha(theme.palette.primary.main, theme.palette.mode === "light" ? 0.04 : 0.1),
                })}
              />
            ))}
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};
