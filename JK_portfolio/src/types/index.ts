// Shared TypeScript types for the portfolio

/** One design decision, traced from the evidence behind it to the effect it had. */
export interface Decision {
  evidence: string;
  decision: string;
  effect: string;
}

export interface Outcome {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  problem: string;
  /** How the parts of the system (teams, tools, product) connect. */
  systemView: string;
  role: string;
  decisions: Decision[];
  outcomes: Outcome[];
  lesson?: string;
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: 'Strategy' | 'Systems' | 'Leadership' | 'Craft';
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}
