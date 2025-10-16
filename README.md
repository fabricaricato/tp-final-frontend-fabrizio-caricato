# 🖥️ Proyecto Final Frontend — Fabrizio Caricato

Este proyecto es una aplicación web desarrollada con **React** y **Vite**, como parte del trabajo final del primer modulo de front-end developer de la **UTN**

El sitio implementa componentes reutilizables, un sistema de temas (modo claro/oscuro), un alternador para cambiar el lenguaje de toda la página web y navegación por rutas, buscando aplicar buenas prácticas de desarrollo frontend moderno.

Esta aplicación actúa como una plataforma de comunicación digital que facilita el intercambio de mensajes en tiempo real y gestiona la persistencia de las interacciones y los datos de usuario.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React** — Librería principal para la interfaz de usuario.  
- 🔀 **React Router DOM** — Manejo de rutas y navegación entre páginas.  
- ⚡ **Vite** — Herramienta de desarrollo rápida y ligera.

---

## 📂 Estructura del proyecto

tp-final-frontend-fabrizio-caricato/
│
├── public/ # Archivos públicos
│
├── src/ # Código fuente principal del proyecto
│ ├── assets/ # Recursos estáticos (imágenes, íconos, etc.)
│ │ └── images/
│ │ ├── avatar.jpeg
│ │ └── logo.png
│ │
│ ├── components/ # Componentes reutilizables de la interfaz
│ │ ├── Chat.jsx # Interfaz principal del chat
│ │ ├── ProtectedRoute.jsx # Ruta protegida según autenticación o permisos
│ │ └── Sidebar.jsx # Barra lateral de navegación o menús
│ │
│ ├── context/ # Contextos globales de la aplicación (manejo de estado)
│ │ ├── ChatContext.jsx # Contexto para la gestión del chat (mensajes, usuarios, etc.)
│ │ ├── LanguageContext.jsx # Contexto para el lenguaje (chat, help, etc.)
│ │ └── ThemeContext.jsx # Contexto para el tema (modo claro/oscuro)
│ │
│ ├── router/ # Configuración y control de rutas
│ │ └── RouterApp.jsx # Definición de las rutas principales de la app
│ │
│ ├── views/ # Páginas principales del sitio
│ │ ├── Gallery.jsx # Página de galería de fotos
│ │ ├── Help.jsx # Página de ayuda o soporte
│ │ ├── Login.jsx # Página de inicio de sesión
│ │ ├── Messages.jsx # Página de mensajes o conversación
│ │ └── NotFound.jsx # Página de error 404
│ │
│ ├── index.css # Estilos globales del proyecto
│ ├── main.jsx # Punto de entrada de React (montaje del componente raíz)
│ └── translations.js # Archivo con las traducciones de la página web
│
├── .gitignore # Archivos y carpetas ignorados por Git
├── eslint.config.js # Configuración de ESLint
├── index.html # Plantilla HTML base
├── package.json # Dependencias y scripts del proyecto
├── package-lock.json # Control de versiones de dependencias
├── vite.config.js # Configuración de Vite
├── vercel.json # Configuración de despliegue (Vercel)
└── README.md # Documentación del proyecto

---

## 🧭 Características principales

- 🌙 **Modo oscuro y claro** mediante Context API.  
- 📄 **Página de ayuda / información** con interfaz intuitiva.  
- 📱 **Diseño responsive** adaptable a diferentes dispositivos.
- 📱 **Cambio de idioma** para una mejor integración con el usuario.

---

## 🧑‍💻 Autor

**Fabrizio Caricato**
Proyecto desarrollado como trabajo final del primer modulo de front-end developer de la institución académica "UTN"