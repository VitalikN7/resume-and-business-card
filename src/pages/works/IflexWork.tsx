import { WorkExperienceCard } from "./WorkExperienceCard";
import type { WorkExperience } from "./types";

const iflexWork: WorkExperience = {
  company: "iFlex",
  project: "Внутренние продукты, CRM и frontend-инфраструктура",
  role: "Frontend-разработчик",
  period: "Апрель 2022 — Февраль 2024 (1 год и 11 месяцев)",
  summary:
    "Разрабатывал внутренние продукты компании: CRM-системы, frontend-инфраструктуру и real-time модули.",
  highlights: [
    "Микрофронтенды",
    "Module Federation",
    "JavaScript → TypeScript",
    "WebSocket",
  ],
  sections: [
    {
      title: "Frontend-архитектура",
      items: [
        "Участвовал в декомпозиции крупного монолитного frontend-приложения на микрофронтенды.",
        "Работал с Module Federation и Webpack 5: разделение модулей, общие зависимости и интеграция приложений.",
      ],
    },

    {
      title: "CRM и бизнес-логика",
      items: [
        "Разрабатывал CRM-модули со сложными формами, таблицами, фильтрацией и role-based сценариями.",
        "Реализовал автосохранение черновиков и восстановление данных после обновления страницы или потери сессии.",
      ],
    },

    {
      title: "Надёжность",
      items: [
        "Разработал real-time чат на WebSocket с retry/reconnect логикой.",
        "Участвовал в миграции JavaScript → TypeScript и покрывал критичную бизнес-логику unit/integration тестами.",
      ],
    },
  ],
  technologies: [
    "React",
    "TypeScript",
    "Zustand",
    "WebSocket",
    "Module Federation",
    "Webpack 5",
    "Tailwind CSS",
    "Jest",
    "React Testing Library",
    "Docker",
    "CI/CD",
    "REST API",
  ],
};

export const IflexWork = () => {
  return <WorkExperienceCard work={iflexWork} delayMs={220} />;
};
