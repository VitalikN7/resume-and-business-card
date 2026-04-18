export interface WorkSection {
  title: string;
  items: string[];
}

export interface WorkExperience {
  company: string;
  project: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  sections: WorkSection[];
  technologies: string[];
}
