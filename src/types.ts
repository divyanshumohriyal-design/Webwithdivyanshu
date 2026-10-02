export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  url: string;
  description: string;
  tags: string[];
  themeColor: string;
  accentColor: string;
  badge: string;
  features: string[];
  headline: string;
  subheadline: string;
  heroSnippet: {
    title: string;
    subtitle: string;
    ctaText: string;
    accentBadge: string;
  };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
