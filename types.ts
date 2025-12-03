import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  bgColor: string;
}