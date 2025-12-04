export type SectionType = 'dont' | 'do';

export interface AdviceItem {
  id: string;
  text: string;
  type: SectionType;
}

export interface SectionProps {
  type: SectionType;
  items: AdviceItem[];
  title: string;
}
