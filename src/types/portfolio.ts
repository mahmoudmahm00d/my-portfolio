export interface SocialLink {
  github?: string;
  linkedin?: string;
  twitter?: string;
  cv?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
  image?: string;
  featured?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  url?: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  metadataBase?: string;
  twitterHandle?: string;
}

export interface Contact {
  email: string;
  location: string;
  social: SocialLink;
}

export interface Portfolio {
  name: string;
  title: string;
  roles: string[];
  about: string;
  social: SocialLink;
  nav: NavItem[];
  skills: SkillGroup[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
  contact: Contact;
  seo: SEO;
}
