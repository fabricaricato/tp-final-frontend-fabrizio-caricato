import { useState, useEffect } from "react"
import { useChat } from "../context/ChatContext"
import { useLanguage } from "../context/LanguageContext"
import translations from "../translations"

export default function Sidebar() {
  const { users, setSelectedUser } = useChat()
  const [usersToRender, setUsersToRender] = useState(users)
  const { language } = useLanguage() 

  useEffect(() => {
    setUsersToRender(users)
  }, [users])

  const handleChange = (event) => {
    const searchTerm = event.target.value.toLowerCase()
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm)
    )
    setUsersToRender(result)
  }

  const handleUserClick = (userId) => {
    setSelectedUser(userId)

    if (window.innerWidth <= 480) {
      const sidebar = document.querySelector(".sidebar")
      const chat = document.querySelector(".chat")
      sidebar.style.display = "none"
      chat.style.display = "flex"
    }
  }

  return (
    <div className="sidebar">
      <input
        type="text"
        placeholder={translations[language].searchPlaceholder}
        className="search"
        onChange={handleChange}
      />

      {usersToRender.length === 0 && (
        <p className="search-result">{translations[language].noResults}</p>
      )}

      <ul className="user-list">
        {usersToRender.map((user) => (
          <li
            key={user.id}
            onClick={() => handleUserClick(user.id)}
            className="user"
          >
            <img
              className="avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
              alt={user.name}
            />
            <div className="user-info">
              <strong>
                <span
                  style={{
                    color: user.status === "online" ? "green" : "red",
                    marginRight: "3px",
                  }}
                >
                  •
                </span>
                {user.name}
              </strong>
              <small>
                {user.status === "offline"
                  ? user.lastSeen
                  : translations[language].online}
              </small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}