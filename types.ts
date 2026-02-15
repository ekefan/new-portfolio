
export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  accent: 'blue' | 'purple' | 'green';
  skills: string[];
  icon: any;
}

export interface CaseStudy {
  id: string;
  title: string;
  headline: string;
  context: string;
  tech: string[];
  metrics: string;
  category: 'Backend' | 'DevOps' | 'OSS';
}

export interface NavLink {
  label: string;
  href: string;
}
