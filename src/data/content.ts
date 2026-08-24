import { defaultLang, type Lang } from '../i18n/ui';

import experienceData from './experience.json';
import projectsData from './projects.json';

/** A field whose value changes per language. Missing locales fall back to the default one. */
type Localized<T> = Partial<Record<Lang, T>> & Record<typeof defaultLang, T>;

function pick<T>(field: Localized<T>, lang: Lang): T {
    return field[lang] ?? field[defaultLang];
}

export interface ExperienceItem {
    role: string;
    company: string;
    isCurrent: boolean;
    duration: string;
    description: string[];
}

export interface ProjectItem {
    pinned: boolean;
    featured?: boolean;
    name: string;
    stack: string[];
    github?: string;
    deploy?: string;
    description: string;
}

export function getExperience(lang: Lang): ExperienceItem[] {
    return experienceData.experience.map((item) => ({
        ...item,
        duration: pick(item.duration, lang),
        description: pick(item.description, lang),
    }));
}

export function getProjects(lang: Lang): ProjectItem[] {
    return projectsData.projects.map((item) => ({
        ...item,
        description: pick(item.description, lang),
    }));
}
