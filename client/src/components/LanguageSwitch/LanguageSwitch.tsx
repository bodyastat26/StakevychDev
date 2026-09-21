import {
    useLanguage,
    type Language,
} from "../../context/LanguageContext";

type LanguageOption = {
    code: Language;
    label: string;
};

const languages: LanguageOption[] = [
    {
        code: "en",
        label: "EN",
    },
    {
        code: "de",
        label: "DE",
    },
    {
        code: "uk",
        label: "UA",
    },
];

function LanguageSwitch() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="language-switch" aria-label="Select language">
            {languages.map((item, index) => (
                <span className="language-option" key={item.code}>
          {index > 0 && (
              <span className="language-divider" aria-hidden="true">
              /
            </span>
          )}

                    <button
                        className={language === item.code ? "is-active" : ""}
                        type="button"
                        onClick={() => setLanguage(item.code)}
                        aria-pressed={language === item.code}
                    >
            {item.label}
          </button>
        </span>
            ))}
        </div>
    );
}

export default LanguageSwitch;