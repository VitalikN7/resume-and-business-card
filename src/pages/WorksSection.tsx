import { Box, Typography } from "@mui/material";
import { useSection } from "@shared/lib/SectionContext";
import { WorkExperienceCard } from "./works/WorkExperienceCard";
import { workExperience } from "./works/workExperienceData";

export const WorksSection = () => {
  const { activeSection } = useSection();

  if (activeSection !== "works") return null;

  return (
    <Box sx={{ color: "text.primary", animation: "sectionReveal 720ms ease-out both" }}>
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
        }}>
        Опыт
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {workExperience.map(({ delayMs, ...work }) => (
          <WorkExperienceCard key={work.company} work={work} delayMs={delayMs} />
        ))}
      </Box>
    </Box>
  );
};
