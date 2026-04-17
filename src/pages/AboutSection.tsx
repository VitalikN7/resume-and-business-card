import { Box, Typography, Card, CardContent } from "@mui/material";
import { useSection } from "@shared/lib/SectionContext";
import avatarImage from "@/assets/avatar.jpg";

export const AboutSection = () => {
  const { activeSection } = useSection();

  if (activeSection !== "about") return null;

  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 4 }}>
        Обо мне
      </Typography>

      <Box sx={{ display: "flex", gap: 4, flexWrap: { xs: "wrap", md: "nowrap" } }}>
        {/* Левая колонка - информация (60%) */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 60%" } }}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Привет! 👋
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                Я разработчик с опытом создания веб-приложений. Специализируюсь на
                фронтенд-разработке с использованием React, TypeScript и современных
                инструментов.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                Люблю писать чистый код, решать сложные задачи и постоянно учиться новым
                технологиям.
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Навыки
              </Typography>
              <Typography component="ul" sx={{ pl: 2 }}>
                <li>React, TypeScript, JavaScript</li>
                <li>Material-UI, CSS, Tailwind</li>
                <li>REST API, GraphQL</li>
                <li>Git, Docker</li>
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Правая колонка - фото (40%) */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "0 0 40%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}>
          <Card sx={{ width: "100%", overflow: "hidden" }}>
            <Box
              component="img"
              src={avatarImage}
              alt="Аватар"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
            />
          </Card>
        </Box>
      </Box>
    </Box>
  );
};
