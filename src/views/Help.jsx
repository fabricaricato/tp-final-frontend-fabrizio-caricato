import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
import { useLanguage } from "../context/LanguageContext"
import translations from "../translations"

const Help = () => {
  const { language } = useLanguage()
  const t = translations.help

  return (
    <main className="help-container">
      <header className="help-header">
        <img src={logo} alt="logo del proyecto" className="help-logo" />
        <h1>{t.title[language]}</h1>
      </header>

      <section className="help-content">
        <article className="help-card">
          <h2>{t.section1.title[language]}</h2>
          <p>{t.section1.p1[language]}</p>
          <p>{t.section1.p2[language]}</p>
        </article>

        <article className="help-card">
          <h2>{t.section2.title[language]}</h2>
          <ul>
            {t.section2.items[language].map((item, i) => (
              <li key={i}>
                <strong>{item.split("—")[0]}</strong> — {item.split("—")[1]}
              </li>
            ))}
          </ul>
        </article>

        <article className="help-card">
          <h2>{t.section3.title[language]}</h2>
          <ul>
            {t.section3.items[language].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </article>

        <div className="help-footer">
          <Link to="/chat" className="help-back-btn">
            {t.backBtn[language]}
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Help
