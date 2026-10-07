import type { WorkExperience } from "./types";

export interface WorkExperienceItem extends WorkExperience {
  delayMs: number;
}

export const workExperience: WorkExperienceItem[] = [
  //* NBK Finance
  {
    company: "NBK Finance",
    project: "Enterprise-приложения и внутренние сервисы",
    role: "Fullstack-разработчик",
    period: "Апрель 2024 — Июль 2026 (2 года и 4 месяца)",
    summary: "Разработка fullstack-приложений и внутренних сервисов на React/NestJS.",
    highlights: [
      "React + NestJS/Express",
      "JWT Auth",
      "PostgreSQL",
      "AI-assisted search",
    ],
    sections: [
      {
        title: "Fullstack-разработка",
        items: [
          "Разрабатывал frontend и backend enterprise-приложений на React и Node.js.",
          "Проектировал REST API и backend-модули на NestJS/Express, работал с PostgreSQL и SQL-оптимизацией.",
        ],
      },
      {
        title: "Оптимизация и автоматизация",
        items: [
          "Выстроил типизированный data layer на RTK Query: кэширование, invalidation тегов, обработка loading/error-состояний и переиспользуемые API-хуки.",
          "Реализовал визуальную проверку конфликтующих условий при заведении новых продуктов.",
        ],
      },
      {
        title: "Продуктовые интерфейсы",
        items: [
          "Разрабатывал и проектировал административные панели, сложные формы и data-driven интерфейсы.",
          "Интегрировал AI-assisted со streaming-ответами и контекстными UI-сценариями.",
        ],
      },
    ],
    technologies: [
      "React 18+",
      "NestJS 10+",
      "TypeScript 5+",
      "JavaScript",
      "Node.js",
      "Express.js",
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
    delayMs: 320,
  },
  //* iFlex
  {
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
    delayMs: 220,
  },
  //* Viroom
  {
    company: "Viroom",
    project: "Покупка и продажа недвижимости и товаров",
    role: "Frontend-разработчик",
    period: "Октябрь 2020 — Март 2022 (1 год и 6 месяцев)",
    summary:
      "Отвечал за frontend-архитектуру, производительность, сложные пользовательские сценарии, аналитические интерфейсы и 3D/360-функциональность платформы.",
    highlights: ["FSD-архитектура", "UI Kit 35+", "3D / 360"],
    sections: [
      {
        title: "Архитектура",
        items: [
          "Спроектировал frontend-архитектуру на FSD и UI Kit из 35+ переиспользуемых компонентов.",
          "Выстроил типизированный data layer на RTK Query: кэширование, invalidation тегов, обработка loading/error-состояний и переиспользуемые API-хуки.",
        ],
      },
      {
        title: "Производительность",
        items: [
          "Оптимизировал загрузку high-load интерфейсов через code splitting, lazy loading, виртуализацию списков и оптимизацию изображений.",
          "Улучшил Core Web Vitals и стабильность интерфейса при загрузке динамического контента.",
        ],
      },
      {
        title: "Продуктовые задачи",
        items: [
          "Разработал поиск и фильтрацию каталога, аналитические дашборды и интерактивные 3D/360-туры недвижимости.",
          "Разрабатывал продуктовые сценарии карточки товара/объекта: характеристики, галереи, варианты комплектации, связанные товары и интерактивный контент ",
        ],
      },
    ],
    technologies: [
      "React 18+",
      "TypeScript 5+",
      "Redux Toolkit",
      "RTK Query",
      "React Router",
      "React Hook Form",
      "Storybook",
      "DnD Kit",
      "Swiper",
      "Recharts",
      "Photo Sphere Viewer",
      "Vite",
      "ESBuild",
      "SCSS",
      "CSS Modules",
      "REST API",
      "Docker",
      "CI/CD",
    ],
    delayMs: 120,
  },
];
