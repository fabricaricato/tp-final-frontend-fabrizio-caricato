import { createContext, useContext, useState, useEffect, use } from "react"

const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  useEffect(() => { 
    const savedLanguage = localStorage.getItem("appLanguage")
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("appLanguage", language);
  }, [language]);

  useEffect(() => {
    if (language === 'en') {
      document.documentElement.lang = 'en'
    } else if (language === 'es') {
      document.documentElement.lang = 'es'
    }
  }, [language]);

  return (
  <LanguageContext.Provider value={{language, setLanguage}}>
    {children}
  </LanguageContext.Provider>
  ) 
} 

const useLanguage = () => useContext(LanguageContext)

export { useLanguage, LanguageProvider }