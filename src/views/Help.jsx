import React from 'react';


const Help = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-teal-600 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 text-white" />
              <h1 className="text-2xl font-semibold text-white">Centro de Ayuda</h1>
            </div>
            <button className="text-white hover:bg-teal-700 px-4 py-2 rounded-lg transition-colors">
              Volver al Chat
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Introducción */}
        <section className="mb-12">
          <div className="bg-teal-50 border-l-4 border-teal-500 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Bienvenido a la Documentación</h2>
            <p className="text-gray-700 leading-relaxed">
              Esta aplicación es un clon de WhatsApp diseñado para ofrecer una experiencia de mensajería 
              instantánea fluida y moderna. Aquí encontrarás toda la información necesaria para aprovechar 
              al máximo las funcionalidades del chat.
            </p>
          </div>
        </section>

        {/* Funcionamiento General */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-6 text-teal-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Funcionamiento General del Chat</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-teal-600 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5" />
                  Gestión de Contactos
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  La aplicación muestra una lista de usuarios en el panel lateral izquierdo. Puedes ver 
                  el estado de conexión de cada contacto (online/offline) y el tiempo transcurrido desde 
                  su última conexión. Para iniciar una conversación, simplemente haz clic en el contacto deseado.
                </p>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-teal-600 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5" />
                  Envío de Mensajes
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Para enviar un mensaje, escribe tu texto en el campo de entrada ubicado en la parte 
                  inferior de la ventana de chat. Puedes enviar el mensaje presionando el botón de envío 
                  (representado por un ícono de flecha) o usando la tecla Enter. Los mensajes se muestran 
                  en tiempo real con marca de tiempo.
                </p>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-teal-600 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5" />
                  Búsqueda de Conversaciones
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Utiliza la barra de búsqueda en la parte superior del panel lateral para encontrar 
                  rápidamente contactos específicos. La búsqueda filtra los resultados en tiempo real 
                  mientras escribes.
                </p>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-teal-600 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5" />
                  Notificaciones
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Recibirás notificaciones cuando lleguen nuevos mensajes. Los mensajes no leídos se 
                  destacan visualmente en la lista de contactos para que puedas identificarlos fácilmente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tecnologías Utilizadas */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-6 text-teal-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Tecnologías Utilizadas</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-teal-600 mb-4">Frontend</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 font-bold">•</span>
                  <span><strong className="text-gray-800">React.js:</strong> Biblioteca principal para construir la interfaz de usuario con componentes reutilizables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 font-bold">•</span>
                  <span><strong className="text-gray-800">Tailwind CSS:</strong> Framework de estilos para un diseño moderno y responsive</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 font-bold">•</span>
                  <span><strong className="text-gray-800">Lucide React:</strong> Librería de íconos para elementos visuales consistentes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-teal-600 mb-4">Backend (Propuesto)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 font-bold">•</span>
                  <span><strong className="text-gray-800">Node.js:</strong> Entorno de ejecución para el servidor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 font-bold">•</span>
                  <span><strong className="text-gray-800">Socket.io:</strong> Comunicación en tiempo real bidireccional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 font-bold">•</span>
                  <span><strong className="text-gray-800">Express.js:</strong> Framework web para gestión de rutas y API</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-teal-600 mb-4">Base de Datos</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 font-bold">•</span>
                  <span><strong className="text-gray-800">MongoDB:</strong> Base de datos NoSQL para almacenar mensajes y usuarios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 font-bold">•</span>
                  <span><strong className="text-gray-800">Mongoose:</strong> ODM para modelado de datos de MongoDB</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-teal-600 mb-4 flex items-center gap-2">
                <span className="w-5 h-5" />
                Seguridad
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 font-bold">•</span>
                  <span><strong className="text-gray-800">JWT:</strong> Autenticación mediante tokens seguros</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 font-bold">•</span>
                  <span><strong className="text-gray-800">Bcrypt:</strong> Encriptación de contraseñas</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Posibles Mejoras Futuras */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-6 text-teal-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Posibles Mejoras Futuras</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-teal-600 mb-4">Funcionalidades de Mensajería</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Envío de archivos multimedia (imágenes, videos, documentos)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Mensajes de voz grabados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Videollamadas y llamadas de voz</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Reacciones a mensajes con emojis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Respuestas citadas a mensajes específicos</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-teal-600 mb-4">Gestión de Grupos</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Creación y administración de grupos de chat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Roles de administrador y permisos personalizados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Añadir y eliminar miembros del grupo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Configuración de privacidad grupal</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-teal-600 mb-4">Personalización</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Temas personalizables (claro/oscuro/personalizado)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Fondos de pantalla para cada conversación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Stickers y GIFs integrados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Personalización de notificaciones por contacto</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-teal-600 mb-4">Características Avanzadas</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Encriptación end-to-end para mayor seguridad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Estados/Historias temporales de 24 horas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Sincronización multi-dispositivo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Modo sin conexión con sincronización automática</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Búsqueda avanzada dentro de conversaciones</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <section className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
          <h3 className="text-xl font-semibold text-teal-600 mb-4">¿Necesitas más ayuda?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Si tienes dudas adicionales o encuentras algún problema técnico, no dudes en contactar 
            al equipo de desarrollo. Estamos trabajando constantemente para mejorar la experiencia 
            del usuario y agregar nuevas funcionalidades.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg transition-colors shadow-sm">
              Contactar Soporte
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2.5 rounded-lg transition-colors">
              Ver Tutorial
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-600">
          <p>© 2025 WhatsApp Clone. Proyecto educativo de desarrollo web.</p>
        </div>
      </footer>
    </div>
  );
}

export default Help