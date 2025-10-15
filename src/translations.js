const translations = {
  en: {
    noUser: "No user selected...",
    showUsers: "Show users",
    chatSettings: "Chat Settings",
    changeTheme: "Change theme",
    light: "Light",
    dark: "Dark",
    changeLanguage: "Change language",
    english: "English",
    spanish: "Spanish",
    close: "Close",
    lastSeen: "Last seen",
    camera: "Camera",
    gallery: "Gallery",
    settings: "Settings",
    help: "Help",
    logout: "Log out",
    placeholder: "Enter text here...",
    searchPlaceholder: "Search...",
    noResults: "No users found...",
    online: "online"
  },
  es: {
    noUser: "No hay usuario seleccionado...",
    showUsers: "Mostrar usuarios",
    chatSettings: "Configuración de chat",
    changeTheme: "Cambiar tema",
    light: "Claro",
    dark: "Oscuro",
    changeLanguage: "Cambiar idioma",
    english: "Inglés",
    spanish: "Español",
    close: "Cerrar",
    lastSeen: "Última conexión",
    camera: "Cámara",
    gallery: "Galería",
    settings: "Configuración",
    help: "Ayuda",
    logout: "Cerrar sesión",
    placeholder: "Escribí tu mensaje...",
    searchPlaceholder: "Buscar...",
    noResults: "No se encontraron usuarios...",
    online: "en línea"
  },
  help: {
    title: {
      es: "Centro de Ayuda",
      en: "Help Center",
    },
    section1: {
      title: {
        es: "📱 Funcionamiento general del chat",
        en: "📱 General Functioning of the Chat",
      },
      p1: {
        es: `Este proyecto es un clon de WhatsApp Web simplificado. 
            Permite que distintos usuarios se comuniquen mediante mensajes de texto.
            Cada usuario puede iniciar sesión, ver sus contactos en línea y chatear 
            dentro de una interfaz limpia e intuitiva.`,
        en: `This project is a simplified clone of WhatsApp Web.
            It allows multiple users to communicate via text messages.
            Each user can log in, see their online contacts, and chat
            through a clean and intuitive interface.`,
      },
      p2: {
        es: `El sistema cuenta con un panel lateral donde se listan los contactos disponibles, 
            y una ventana de conversación donde se renderizan los mensajes enviados y recibidos.`,
        en: `The system includes a sidebar listing available contacts,
            and a chat window displaying sent and received messages.`,
      },
    },
    section2: {
      title: {
        es: "⚙️ Tecnologías utilizadas",
        en: "⚙️ Technologies Used",
      },
      items: {
        es: [
          "React.js — para construir la interfaz de usuario.",
          "React Router — para la navegación entre rutas.",
          "Context API — para manejar el estado global del chat.",
          "CSS — para el diseño visual.",
          "LocalStorage — para simular autenticación de usuarios.",
        ],
        en: [
          "React.js — for building the user interface.",
          "React Router — for navigation between routes.",
          "Context API — for managing global chat state.",
          "CSS — for visual design.",
          "LocalStorage — to simulate user authentication.",
        ],
      },
    },
    section3: {
      title: {
        es: "🚀 Posibles mejoras futuras",
        en: "🚀 Possible Future Improvements",
      },
      items: {
        es: [
          "Integración con base de datos real.",
          "Soporte para envío de imágenes, audios y archivos.",
          "Autenticación real.",
          "Notificaciones en tiempo real.",
        ],
        en: [
          "Integration with a real database.",
          "Support for sending images, audio, and files.",
          "Real authentication.",
          "Real-time notifications.",
        ],
      },
    },
    backBtn: {
      es: "← Volver al chat",
      en: "← Back to chat",
    },
  }
}

export default translations
