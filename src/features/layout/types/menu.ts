import { type LucideIcon } from "lucide-react";

export interface NavSubItem {
  name: string;
  href?: string;
  items?: NavSubItem[];
}

export interface NavItem {
  name: string;
  href?: string;
  icon?: LucideIcon;
  role: string[];
  items?: NavSubItem[];
}