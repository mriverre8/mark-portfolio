import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    };
}

export function getLocalizedPathname(pathname: string, targetLang: string) {
    const segments = pathname.split('/');
    if (segments.length > 1 && Object.keys(ui).includes(segments[1] as string)) {
        segments[1] = targetLang;
        return segments.join('/');
    }
    return `/${targetLang}${pathname}`;
}
