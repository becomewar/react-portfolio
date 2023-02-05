export type LanguageContextProps = {
  languageCode: keyof TLanguage;
  translate: (key: TLanguageKey) => string;
  handleChangeLanguage: (language: keyof TLanguage) => void;
};

export type LanguageProviderProps = {
  children: React.ReactNode;
};

export type TLanguage = {
  BR: string;
  EN: string;
};

export type TLanguageKey = string;
