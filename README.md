<!-- # 💬 Aplicación de Chat: Análisis Funcional

Esta aplicación actúa como una plataforma de comunicación digital que facilita el intercambio de mensajes en tiempo real y gestiona la persistencia de las interacciones y los datos de usuario.

---

## 💾 Persistencia y Almacenamiento de Datos

La funcionalidad central del sistema es garantizar que la información se mantenga intacta entre sesiones. Esto se logra mediante la persistencia de:

* **Contactos (Usuarios):** Almacenamiento y recuperación de la lista de usuarios con los que se han iniciado conversaciones.
* **Historial de Conversaciones:** Registro cronológico de todos los **mensajes** enviados y recibidos, manteniendo la integridad de las interacciones pasadas.

---

## 🎯 Módulos de la Interfaz de Usuario (UI)

La aplicación está segmentada en cuatro componentes clave que dirigen la experiencia del usuario y las funcionalidades del sistema:

### 🎫 Autenticación (`Login`)

* **Propósito:** Proteger el acceso y verificar la identidad del usuario.
* **Mecanismo:** Requiere la validación de **credenciales** (nombre de usuario y contraseña) para iniciar una sesión privada en la plataforma.

### 📜 Lista de Contactos (`Sidebar`)

* **Propósito:** Navegación y selección de la conversación deseada.
* **Mecanismo:** Muestra una lista dinámica de **contactos**. Al seleccionar uno, se carga el historial de mensajes correspondiente en el módulo principal.

### 💬 Chat Principal (Interacción)

* **Propósito:** Envío y recepción de mensajes en tiempo real.
* **Mecanismo:** Incluye un área para la **composición del mensaje** y un control de **envío**. Los mensajes se visualizan secuencialmente en el hilo de conversación.

### ⚙️ Configuración (`Settings`)

* **Propósito:** Personalización de la experiencia y la interfaz.
* **Opciones Disponibles:**
    * **Ahorro de Energía:** Activa un modo visual de baja luminosidad (**Dark Mode**) optimizando la eficiencia energética y la ergonomía visual.
--- -->

# 🖥️ Proyecto Final Frontend — Fabrizio Caricato

Este proyecto es una aplicación web desarrollada con **React** y **Vite**, como parte del trabajo final del primer modulo de front-end developer de la **UTN**

El sitio implementa componentes reutilizables, un sistema de temas (modo claro/oscuro) y navegación por rutas, buscando aplicar buenas prácticas de desarrollo frontend moderno.

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
│ │ └── ThemeContext.jsx # Contexto para el tema (modo claro/oscuro)
│ │
│ ├── router/ # Configuración y control de rutas
│ │ └── RouterApp.jsx # Definición de las rutas principales de la app
│ │
│ ├── views/ # Páginas principales del sitio
│ │ ├── Help.jsx # Página de ayuda o soporte
│ │ ├── Login.jsx # Página de inicio de sesión
│ │ ├── Messages.jsx # Página de mensajes o conversación
│ │ └── NotFound.jsx # Página de error 404
│ │
│ ├── index.css # Estilos globales del proyecto
│ ├── main.jsx # Punto de entrada de React (montaje del componente raíz)
│ └── App.jsx # Componente principal de la aplicación
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
- ⚙️ **Componentes modulares** y reutilizables.  
- 📱 **Diseño responsive**, adaptable a diferentes dispositivos.  
- 🧩 **Configuración optimizada** con Vite para desarrollo y producción.

---

## 🧑‍💻 Autor

**Fabrizio Caricato**
Proyecto desarrollado como trabajo final del primer modulo de front-end developer de la institución académica "UTN"