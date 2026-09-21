import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

export type Language = "en" | "de" | "uk";

type LanguageContextValue = {
    language: Language;
    setLanguage: (language: Language) => void;
};

type LanguageProviderProps = {
    children: ReactNode;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
    undefined,
);

function isSupportedLanguage(value: string | null): value is Language {
    return value === "en" || value === "de" || value === "uk";
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState<Language>(() => {
        const savedLanguage = localStorage.getItem("language");

        if (isSupportedLanguage(savedLanguage)) {
            return savedLanguage;
        }

        const browserLanguage = navigator.language.toLowerCase();

        if (browserLanguage.startsWith("uk")) {
            return "uk";
        }

        if (browserLanguage.startsWith("de")) {
            return "de";
        }

        return "en";
    });

    useEffect(() => {
        localStorage.setItem("language", language);
        document.documentElement.lang = language;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used inside LanguageProvider");
    }

    return context;
}