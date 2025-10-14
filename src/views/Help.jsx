import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"

const Help = () => {
  return (
    <main className="help-container">
      <header className="help-header">
        <img src={logo} alt="logo del proyecto" className="help-logo" />
        <h1>Centro de Ayuda</h1>
      </header>

      <section className="help-content">
        <article className="help-card">
          <h2>📱 Funcionamiento general del chat</h2>
          <p>
            Este proyecto es un clon de <strong>WhatsApp Web</strong> simplificado. 
            Permite que distintos usuarios se comuniquen mediante mensajes de texto.
            Cada usuario puede iniciar sesión, ver sus contactos en línea y chatear 
            dentro de una interfaz limpia e intuitiva.
          </p>
          <p>
            El sistema cuenta con un <strong>panel lateral</strong> donde se listan los contactos disponibles, 
            y una <strong>ventana de conversación</strong> donde se renderizan los mensajes enviados y recibidos.
          </p>
        </article>

        <article className="help-card">
          <h2>⚙️ Tecnologías utilizadas</h2>
          <ul>
            <li><strong>React.js</strong> — para construir la interfaz de usuario.</li>
            <li><strong>React Router</strong> — para la navegación entre rutas.</li>
            <li><strong>Context API</strong> — para manejar el estado global del chat.</li>
            <li><strong>CSS</strong> — para el diseño visual.</li>
            <li><strong>LocalStorage</strong> — para simular autenticación de usuarios.</li>
          </ul>
        </article>

        <article className="help-card">
          <h2>🚀 Posibles mejoras futuras</h2>
          <ul>
            <li>Integración con base de datos real.</li>
            <li>Soporte para envío de imágenes, audios y archivos.</li>
            <li>Autenticación real.</li>
            <li>Notificaciones en tiempo real.</li>
          </ul>
        </article>

        <div className="help-footer">
          <Link to="/chat" className="help-back-btn">
            ← Volver al chat
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Help