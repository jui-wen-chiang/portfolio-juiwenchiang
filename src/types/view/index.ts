import type { ReactElement } from 'react';

export type ViewItems =
    | "home"
    | "about"
    | "experience"
    | "projects"
    | "eduAndcert"
    | "skills"
    | "contact"
    | "footer";
    
export interface ViewMappingItem {
  id: ViewItems;
  component: ReactElement;
}