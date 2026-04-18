import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

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
      <CardContent sx={{ p: { xs: 2.5, md: 3.25 }, "&:last-child": { pb: { xs: 2.5, md: 3.25 } } }}>
        <Typography variant="h5" sx={{ mb: 1.5, color: "text.primary" }}>
          Коротко обо мне
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1.5 }}>
          {["6+ лет", "React", "TypeScript", "Next.js", "NestJS"].map((item) => (
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
                bgcolor: alpha(theme.palette.primary.main, theme.palette.mode === "light" ? 0.08 : 0.16),
                border: "1px solid",
                borderColor: alpha(theme.palette.primary.main, theme.palette.mode === "light" ? 0.16 : 0.3),
              })}>
              {item}
            </Box>
          ))}
        </Box>

        <Typography variant="h6" sx={{ mb: 1.5, color: "text.primary", fontWeight: 700 }}>
          Fullstack-разработчик с опытом более 6 лет
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{
            mb: 1,
            color: "text.secondary",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}>
          Ключевой опыт
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 2.5, color: "text.primary" }}>
          <li>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Спроектировал и развиваю продукт с нуля на React 18 + TypeScript + FSD.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Имею практический опыт с Next.js 14+ (App Router, SSR/SSG) для улучшения SEO и
              производительности.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Вывел LCP с 12-14 с до 3.0-3.5 с на 3G за счет lazy loading и виртуализации
              списков.
            </Typography>
          </li>
        </Box>

        <Typography
          variant="subtitle2"
          sx={{
            mb: 1,
            color: "text.secondary",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}>
          Техническая база
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 2.5, color: "text.primary" }}>
          <li>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Поддерживаю 85%+ покрытие тестами (Jest + RTL) и quality gate в CI/CD.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Проектировал и поддерживал серверную логику на Express и NestJS, поэтому
              эффективно выстраиваю взаимодействие фронтенда с бэкендом.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Работаю по Agile/Scrum, пишу техническую документацию, настраиваю CI/CD и
              Docker-контейнеризацию.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              В разработке придерживаюсь принципов SOLID и стараюсь держать кодовую базу
              понятной и поддерживаемой.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Делал сайты под ключ:{" "}
              <Link href="https://www.shcider.com" target="_blank" rel="noreferrer" underline="hover">
                shcider.com
              </Link>{" "}
              ,{" "}
              <Link
                href="https://www.rusintertrans.com"
                target="_blank"
                rel="noreferrer"
                underline="hover">
                rusintertrans.com
              </Link>
              {" "}и{" "}
              <Link href="https://www.viroom.ru" target="_blank" rel="noreferrer" underline="hover">
                viroom.ru
              </Link>
              .
            </Typography>
          </li>
        </Box>

        <Typography
          variant="subtitle2"
          sx={{
            mb: 1,
            color: "text.secondary",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}>
          Что важно в работе
        </Typography>
        <Box component="ul" sx={{ pl: 3, color: "text.primary" }}>
          <li>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Чистота кода и адекватная обратная связь.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Сильная команда с понятными процессами разработки.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Интересные задачи и возможность профессионального роста.
            </Typography>
          </li>
        </Box>
      </CardContent>
    </Card>
  );
};
