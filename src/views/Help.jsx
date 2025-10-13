import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"

const Help = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center px-6 py-10">
      <img src={logo} alt="logo del proyecto" width={100} className="mb-4" />
      <h1 className="text-3xl font-bold text-teal-600 mb-6">Centro de Ayuda / Documentación</h1>

      <section className="max-w-3xl space-y-6">
        <article>
          <h2 className="text-2xl font-semibold mb-2 text-teal-700">📱 Funcionamiento general del chat</h2>
          <p className="leading-relaxed">
            Este proyecto es un clon de <strong>WhatsApp Web</strong> simplificado. 
            Permite la interacción entre distintos usuarios mediante mensajes de texto.
            Cada usuario puede iniciar sesión, visualizar sus contactos conectados y mantener
            conversaciones en tiempo real dentro de la interfaz principal del chat.
          </p>
          <p className="leading-relaxed mt-2">
            El sistema cuenta con un <strong>panel lateral</strong> donde se muestran los usuarios disponibles,
            y una <strong>ventana de chat</strong> donde se renderizan los mensajes enviados y recibidos.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-2 text-teal-700">⚙️ Tecnologías utilizadas</h2>
          <ul className="list-disc list-inside leading-relaxed">
            <li><strong>React.js</strong> — para la construcción de la interfaz de usuario.</li>
            <li><strong>React Router</strong> — para la navegación entre rutas (login, chat, help, etc.).</li>
            <li><strong>Context API</strong> — para manejar el estado global del chat (mensajes, usuarios, etc.).</li>
            <li><strong>CSS</strong> — para el diseño y estilos visuales del proyecto.</li>
            <li><strong>LocalStorage</strong> — para simular un sistema de autenticación básica.</li>
          </ul>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-2 text-teal-700">🚀 Posibles mejoras futuras</h2>
          <ul className="list-disc list-inside leading-relaxed">
            <li>Integración con una base de datos real (Firebase o MongoDB).</li>
            <li>Soporte para envío de imágenes, audios y archivos.</li>
            <li>Autenticación de usuarios.</li>
            <li>Notificaciones en tiempo real.</li>
          </ul>
        </article>
      </section>

      <div className="mt-10">
        <Link
          to="/chat"
          className="text-teal-600 font-semibold hover:underline"
        >
          ← Volver al chat
        </Link>
      </div>
    </main>
  )
}

export default Help