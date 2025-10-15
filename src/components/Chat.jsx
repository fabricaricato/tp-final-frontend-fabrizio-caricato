import { useState } from "react"
import { useChat } from "../context/ChatContext"
import { Link, useNavigate } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"
import { useLanguage } from "../context/LanguageContext"
import translations from "../translations"

export default function Chat() {
  const [msg, setMsg] = useState("")
  const [showPopup, setShowPopup] = useState(false)

  const { users, selectedUser, setUsers } = useChat()
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()

  const navigate = useNavigate()

  const user = users.find(u => u.id === selectedUser)

  const handleShowSidebar = () => {
    const sidebar = document.querySelector(".sidebar")
    const input = document.querySelector(".search")
    const chat = document.querySelector(".chat")
    const userNotFound = document.querySelector(".user-not-found")

    if (sidebar) {
      sidebar.style.display = "block"
      sidebar.style.flex = "1"
    }
    if (input) input.style.width = "100%"
    if (chat) chat.style.display = "none"
    if (userNotFound) userNotFound.style.display = "none"
  }

  if (!user) {
    return (
      <div className="user-not-found">
        <p>{translations[language].noUser}</p>
        <button className="show-users-button" onClick={handleShowSidebar}>
          {translations[language].showUsers}
        </button>
      </div>
    )
  }

  const handleChange = (event) => setMsg(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()

    const newMessage = {
      id: crypto.randomUUID(),
      text: msg,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }

    const updatedUsers = users.map(u =>
      u.id === user.id
        ? { ...u, messages: [...u.messages, newMessage] }
        : u
    )

    setUsers(updatedUsers)
    setMsg("")
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    navigate("/")
  }

  const handleShowPopup = () => setShowPopup(true)
  const handleClosePopup = () => setShowPopup(false)
  const handleGallery = () => navigate("/gallery")

  const handleChangeTheme = (e) => {
    setTheme(e.target.value)
    localStorage.setItem("appTheme", e.target.value)
  }

  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value)
  }

  return (
    <>
      {showPopup && (
        <section className="cont-popup">
          <div className="popup">
            <h2>{translations[language].chatSettings}</h2>

            <h3>{translations[language].changeTheme}</h3>
            <select onChange={handleChangeTheme} value={theme}>
              <option value="light">{translations[language].light}</option>
              <option value="dark">{translations[language].dark}</option>
            </select>

            <h3>{translations[language].changeLanguage}</h3>
            <select onChange={handleChangeLanguage} value={language}>
              <option value="en">{translations[language].english}</option>
              <option value="es">{translations[language].spanish}</option>
            </select>

            <button onClick={handleClosePopup}>{translations[language].close}</button>
          </div>
        </section>
      )}

      <div className="chat">
        <header className="chat-header">
          <button className="button-header" onClick={handleShowSidebar}>🔍</button>
          <div>
            <div className="chat-user">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
                alt={user.name}
                className="chat-avatar"
              />
              <strong>{user.name}</strong>
              {user.lastSeen !== "" && (
                <span className="last-seen">
                  {translations[language].lastSeen}: {user.lastSeen}
                </span>
              )}
            </div>
          </div>

          <div className="chat-actions">
            <button title={translations[language].camera}>📷</button>
            <button title={translations[language].gallery} onClick={handleGallery}>🖼️</button>
            <button title={translations[language].settings} onClick={handleShowPopup}>⚙️</button>
            <Link to="/help" title={translations[language].help} className="help-button">❓</Link>
            <button onClick={handleLogout} className="log-out">
              {translations[language].logout}
            </button>
          </div>
        </header>

        <section className="chat-messages">
          {user.messages.map((message) => (
            <div className="message" key={message.id}>
              <p>{message.text}</p>
              <span className="time">{message.time}</span>
            </div>
          ))}
        </section>

        <footer className="chat-footer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={translations[language].placeholder}
              onChange={handleChange}
              value={msg}
            />
            <button>➤</button>
          </form>
        </footer>
      </div>
    </>
  )
}