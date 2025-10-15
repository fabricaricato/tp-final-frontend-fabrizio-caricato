import { useState } from "react"
import { useChat } from "../context/ChatContext"
import { Link, useNavigate } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"

export default function Chat() {
  const [msg, setMsg] = useState("")
  const [showPopup, setShowPopup] = useState(false)  

  // 1. Obtenemos del contexto todo lo necesario
  const { users, selectedUser, setUsers } = useChat()
  const { theme, setTheme } = useTheme();

  // 2. Buscamos el usuario activo
  const user = users.find(u => u.id === selectedUser)

  const navigate = useNavigate()

  if (!user) {
    return (
      <div className="user-not-found">
        <p>No hay usuario seleccionado...</p>
      </div>
    )
  }

  // 3. Manejo del input
  const handleChange = (event) => {
    setMsg(event.target.value)
  }

  // 4. Cuando enviamos el formulario
  const handleSubmit = (event) => {
    event.preventDefault()

    const newMessage = {
      id: crypto.randomUUID(),
      text: msg,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }

    // ✅ Actualizamos el estado de manera INMUTABLE
    const updatedUsers = users.map(u =>
      u.id === user.id
        ? { ...u, messages: [...u.messages, newMessage] }
        : u
    )

    setUsers(updatedUsers) // esto dispara el useEffect del contexto que guarda en localStorage

    setMsg("")
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    navigate("/")
  }

  const handleShowPopup = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  const handleChangeTheme = (e) => {
    setTheme(e.target.value);
    // localStorage.setItem("appTheme", e.target.value);
  };

  const handleShowSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    const input = document.querySelector('.search');
    sidebar.style.display = 'block';
    sidebar.style.flex = '1';
    input.style.width = '100%';
    const chat = document.querySelector('.chat');
    chat.style.display = 'none';
  }

  return (
    <>
      {
        showPopup === true && <section className="cont-popup">
          <div className="popup">
            <h2>Configuración de Chat</h2>
            <h3>Cambiar tema</h3>
            <select onChange={handleChangeTheme} value={theme}>
              <option value="light">Claro</option>
              <option value="dark">Oscuro</option>
            </select><br></br>
            <button onClick={handleClosePopup}>Cerrar</button>
          </div>
        </section>
      }
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
              {user.lastSeen !== "" && <span className="last-seen">Last seen: {user.lastSeen}</span>}
            </div>
          </div>

          <div className="chat-actions">
            <button title="Camera">📷</button>
            <button title="Gallery">🖼️</button>
            <button title="Settings" onClick={handleShowPopup}>⚙️</button>
            <Link to="/help" title="Help"className="help-button">❓</Link>
            <button onClick={handleLogout} className="log-out">Cerrar sesión</button>
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
              placeholder="Enter text here..."
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