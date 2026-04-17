import { Box, Typography, Card, CardContent, Chip } from "@mui/material";
import { useSection } from "@shared/lib/SectionContext";

export const WorksSection = () => {
  const { activeSection } = useSection();

  if (activeSection !== "works") return null;

  const works = [
    {
      title: "Веб-приложение для управления проектами",
      company: "ООО Компания A",
      period: "2023 - 2024",
      description:
        "Разработал полнофункциональное приложение для управления проектами с использованием React и Redux.",
      technologies: ["React", "TypeScript", "Redux", "Material-UI"],
    },
    {
      title: "Корпоративный портал",
      company: "ООО Компания B",
      period: "2022 - 2023",
      description:
        "Создал интерактивный корпоративный портал с интеграцией API и аутентификацией.",
      technologies: ["React", "JavaScript", "REST API", "CSS"],
    },
    {
      title: "Мобильное веб-приложение",
      company: "ООО Компания C",
      period: "2021 - 2022",
      description:
        "Разработал адаптивное мобильное приложение с поддержкой офлайн-режима.",
      technologies: ["React", "PWA", "Service Workers"],
    },
  ];

  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 4 }}>
        Работы
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {works.map((work, index) => (
          <Card key={index}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  mb: 2,
                }}>
                <Box>
                  <Typography variant="h5">{work.title}</Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    sx={{ fontWeight: 600 }}>
                    {work.company}
                  </Typography>
                </Box>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  {work.period}
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                {work.description}
              </Typography>

              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {work.technologies.map((tech) => (
                  <Chip key={tech} label={tech} size="small" variant="outlined" />
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
