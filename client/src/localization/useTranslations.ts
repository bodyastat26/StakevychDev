import { useLanguage } from "../context/LanguageContext";
import {
    translations,
    type Translation,
} from "./translations";

export function useTranslations(): Translation {
    const { language } = useLanguage();

    return translations[language];
}