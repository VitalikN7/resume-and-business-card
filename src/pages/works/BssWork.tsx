import { WorkExperienceCard } from "./WorkExperienceCard";
import type { WorkExperience } from "./types";

const bssWork: WorkExperience = {
  company: "BSS",
  project: "ИТ-аутсорсинг",
  role: "Fullstack-разработчик",
  period: "Октябрь 2019 — Март 2022 (2 года и 6 месяцев)",
  summary:
    "Разрабатывал full-stack приложения: frontend на React/Next.js и backend на Express/NestJS с SQL и NoSQL базами данных.",
  highlights: ["SEO +35%", "Top-10 по 20+ запросам", "SQL 3 с → 200 мс", "QA fixes -40%"],
  sections: [
    {
      title: "Разработал full-stack решения с фокусом на бизнес-логику",
      items: [
        "Проектировал архитектуру приложения в NestJS: модули, контроллеры, сервисы, dependency injection, guards и interceptors.",
        "Реализовывал REST API на Express.js и NestJS для 3 проектов: аутентификация, CRUD-операции и обработка файлов.",
        "Оптимизировал SQL-запросы в PostgreSQL через индексы, EXPLAIN ANALYZE и денормализацию: ускорил критические выборки с 3 с до 200 мс.",
        "Использовал Sequelize, Prisma и Mongoose для схем, миграций и связей между таблицами.",
      ],
    },
    {
      title: "Улучшил SEO и индексацию",
      items: [
        "Перевел 12 ключевых страниц на Next.js с SSR/SSG.",
        "Внедрил structured data, оптимизировал meta-теги и Open Graph.",
        "Результат: рост органического трафика на 35% за 3 месяца и выход в топ-10 по 20+ запросам.",
      ],
    },
    {
      title: "Повысил качество frontend-кода",
      items: [
        "Провел профилирование тяжелых форм через React Profiler и Chrome DevTools: устранил memory leaks и избыточные ререндеры.",
        "Применил мемоизацию и code splitting, снизив время рендеринга форм с 500 мс до 80 мс.",
        "Результат: улучшение user experience и снижение жалоб на тормоза на 90%.",
      ],
    },
    {
      title: "Обеспечил Pixel Perfect верстку",
      items: [
        "Реализовал адаптивные интерфейсы по макетам Figma для 5 проектов: desktop, tablet и mobile от 320px.",
        "Применил семантичную верстку и accessibility best practices уровня WCAG 2.1 AA.",
        "Результат: снижение времени на внесение правок после QA на 40%.",
      ],
    },
    {
      title: "Менторство и code review",
      items: [
        "Проводил еженедельные code review для 2 junior-разработчиков.",
        "Обучал best practices: React patterns, TypeScript и работе с асинхронностью.",
        "Результат: ускорение роста junior-разработчиков до middle-уровня на 4 месяца быстрее среднего.",
      ],
    },
  ],
  technologies: [
    "Express.js",
    "NestJS",
    "React",
    "JavaScript",
    "Next.js",
    "TypeScript",
    "HTML5",
    "CSS3",
    "PostgreSQL",
    "MongoDB",
    "Redux Toolkit",
    "Material UI",
    "Tailwind CSS",
    "React Router",
    "React Hook Form",
    "Webpack",
    "Git",
    "npm/yarn",
    "CI/CD",
    "Docker",
    "REST API",
    "Axios",
  ],
};

export const BssWork = () => {
  return <WorkExperienceCard work={bssWork} delayMs={320} />;
};
