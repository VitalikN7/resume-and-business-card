import { Box, Card, CardContent, Link, Typography } from "@mui/material";

export const AboutProfileCard = () => {
  return (
    <Card sx={{ mb: 3, bgcolor: "background.paper", color: "text.primary" }}>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2, color: "text.primary" }}>
          Коротко обо мне
        </Typography>
        <Typography variant="h6" sx={{ mb: 1.5, color: "text.primary", fontWeight: 700 }}>
          Fullstack-разработчик с опытом более 6 лет
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 1, color: "text.primary", fontWeight: 600 }}>
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

        <Typography variant="subtitle1" sx={{ mb: 1, color: "text.primary", fontWeight: 600 }}>
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
              и{" "}
              <Link
                href="https://www.rusintertrans.com"
                target="_blank"
                rel="noreferrer"
                underline="hover">
                rusintertrans.com
              </Link>
              .
            </Typography>
          </li>
        </Box>

        <Typography variant="subtitle1" sx={{ mb: 1, color: "text.primary", fontWeight: 600 }}>
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
