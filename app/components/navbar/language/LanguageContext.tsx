"use client"

import { ReactNode, createContext, useState } from 'react';

export type Language = 'english' | 'norwegian' | 'german';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

type LanguageProviderProps = {
    children: ReactNode;
  };

export const LanguageContext = createContext<LanguageContextType>({
  language: 'english',
  setLanguage: () => {},
});

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
    children,
  }) => {
    const [language, setLanguage] = useState<Language>('english');
  
    const value: LanguageContextType = {
      language,
      setLanguage,
    };
  
    return (
      <LanguageContext.Provider value={value}>
        {children}
      </LanguageContext.Provider>
    );
  };