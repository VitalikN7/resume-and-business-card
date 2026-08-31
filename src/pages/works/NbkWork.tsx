import { WorkExperienceCard } from "./WorkExperienceCard";
import type { WorkExperience } from "./types";

const nbkWork: WorkExperience = {
  company: "NBK Finance",
  project: "Enterprise-приложения и внутренние сервисы",
  role: "Fullstack-разработчик",
  period: "Октябрь 2020 — Март 2022 (1 год и 6 месяцев)",
  summary:
    "Разрабатывал fullstack-приложения и внутренние сервисы на React/Next.js и Node.js, работая как с клиентской, так и с серверной частью продукта.",
  highlights: ["React + Node.js", "Next.js SSR / SSG", "JWT Auth", "PostgreSQL"],
  sections: [
    {
      title: "Fullstack-разработка",
      items: [
        "Разрабатывал frontend и backend enterprise-приложений на React/Next.js и Node.js.",
        "Проектировал REST API и backend-модули на NestJS/Express, работал с PostgreSQL и SQL-оптимизацией.",
      ],
    },

    {
      title: "Архитектура приложения",
      items: [
        "Переводил ключевые страницы на Next.js с SSR/SSG для улучшения SEO и скорости загрузки.",
        "Спроектировал JWT-авторизацию: access/refresh токены, protected routes и управление пользовательской сессией.",
      ],
    },

    {
      title: "Продуктовые интерфейсы",
      items: [
        "Разрабатывал административные панели, сложные формы и data-driven интерфейсы.",
        "Реализовал визуальную проверку конфликтующих условий при заведении новых продуктов.",
      ],
    },
  ],
  technologies: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "NestJS",
    "PostgreSQL",
    "Sequelize",
    "JWT",
    "Redux",
    "Material UI",
    "React Router",
    "React Hook Form",
    "Webpack",
    "Docker",
    "CI/CD",
    "REST API",
  ],
};

export const NbkWork = () => {
  return <WorkExperienceCard work={nbkWork} delayMs={320} />;
};
