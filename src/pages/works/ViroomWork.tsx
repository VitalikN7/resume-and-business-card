import { WorkExperienceCard } from "./WorkExperienceCard";
import type { WorkExperience } from "./types";

const viroomWork: WorkExperience = {
  company: "Viroom",
  project: "Покупка и продажа недвижимости и товаров",
  role: "Frontend-разработчик",
  period: "Апрель 2024 — Май 2026 (2 года и 2 месяца)",
  summary:
    "Отвечал за frontend-архитектуру, производительность, сложные пользовательские сценарии, аналитические интерфейсы и 3D/360-функциональность платформы.",
  highlights: ["FSD-архитектура", "UI Kit 35+", "3D / 360", "AI-assisted search"],
  sections: [
    {
      title: "Архитектура",
      items: [
        "Спроектировал frontend-архитектуру на FSD и UI Kit из 35+ переиспользуемых компонентов.",
        "Выстроил типизированный слой работы с REST API на RTK Query: кэширование, invalidation и единая обработка состояний.",
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
        "Интегрировал AI-assisted поиск со streaming-ответами и контекстными UI-сценариями.",
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
};

export const ViroomWork = () => {
  return <WorkExperienceCard work={viroomWork} delayMs={120} />;
};
