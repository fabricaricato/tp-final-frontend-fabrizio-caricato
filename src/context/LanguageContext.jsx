import { createContext, useContext, useState, useEffect } from "react"

const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {}
})

const LanguageProvider = ({ children }) => {
  // Estado inicial desde localStorage (si existe)
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("appLanguage") || "en"
  })

  // Cada vez que cambia el idioma, lo guardamos y actualizamos el atributo <html lang="">
  useEffect(() => {
    localStorage.setItem("appLanguage", language)
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

const useLanguage = () => useContext(LanguageContext)

export { useLanguage, LanguageProvider }