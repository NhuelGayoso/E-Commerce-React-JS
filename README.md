# Todo Pesca - E-commerce de Equipos de Pesca

Una aplicación web moderna de e-commerce especializada en equipos de pesca deportiva, desarrollada con React y Firebase.

## 🎣 Características

- **Autenticación completa**: Registro e inicio de sesión con Firebase Auth
- **Gestión de carrito**: Agregar, eliminar y gestionar productos
- **Diseño responsive**: Optimizado para móviles y desktop
- **Rutas protegidas**: Acceso controlado a funcionalidades
- **Notificaciones**: Sistema de feedback para el usuario
- **UI moderna**: Diseño limpio y profesional

## 🚀 Tecnologías Utilizadas

- **Frontend**: React 18 + Vite
- **Routing**: React Router DOM
- **Autenticación**: Firebase Auth
- **Base de datos**: Firebase Firestore
- **Estilos**: Tailwind CSS
- **Iconos**: React Icons
- **Estado global**: React Context API

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── CartWidget.jsx   # Widget del carrito
│   ├── Footer.jsx       # Pie de página
│   ├── NavBar.jsx       # Barra de navegación
│   ├── Notification.jsx # Sistema de notificaciones
│   ├── ProtectedRoute.jsx # Rutas protegidas
│   └── PublicRoute.jsx  # Rutas públicas
├── context/             # Contextos de React
│   ├── AuthContext.jsx  # Contexto de autenticación
│   └── CartContext.jsx  # Contexto del carrito
├── hooks/               # Hooks personalizados
│   └── useAuth.js       # Hook de autenticación
├── auth/                # Componentes de autenticación
│   ├── Login.jsx        # Página de inicio de sesión
│   └── Register.jsx     # Página de registro
├── pages/               # Páginas principales
│   ├── Home.jsx         # Página de inicio
│   ├── Contact.jsx      # Página de contacto
│   ├── CartPage.jsx     # Página del carrito
│   └── Checkout.jsx     # Página de checkout
├── container/           # Contenedores
│   └── ItemListContainer.jsx # Lista de productos
├── services/            # Servicios
│   └── authService.js   # Servicio de autenticación
├── firebase/            # Configuración de Firebase
│   └── firebaseConfig.js # Configuración
└── assets/              # Recursos estáticos
    ├── FP-logo.png      # Logo de la empresa
    ├── envios.jpg       # Imagen de envíos
    ├── cuotas.jpg       # Imagen de cuotas
    └── promociones.jpg  # Imagen de promociones
```

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn
- Cuenta de Firebase

### Pasos de instalación

1. **Clonar el repositorio**

   ```bash
   git clone <url-del-repositorio>
   cd ProyectoFinalGayoso
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**

   Crear un archivo `.env` en la raíz del proyecto:

   ```env
   VITE_FIREBASE_API_KEY=tu_api_key
   VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
   VITE_FIREBASE_PROJECT_ID=tu_project_id
   VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
   VITE_FIREBASE_MESSAGING_ID=tu_messaging_id
   VITE_FIREBASE_APP_ID=tu_app_id
   VITE_FIREBASE_MEASUREMENT_ID=tu_measurement_id
   ```

4. **Ejecutar en modo desarrollo**

   ```bash
   npm run dev
   ```

5. **Construir para producción**
   ```bash
   npm run build
   ```

## 🔧 Configuración de Firebase

1. Crear un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Habilitar Authentication con Email/Password
3. Crear una base de datos Firestore
4. Obtener las credenciales de configuración
5. Configurar las variables de entorno

## 📱 Funcionalidades

### Autenticación

- Registro de nuevos usuarios
- Inicio de sesión
- Cierre de sesión
- Rutas protegidas y públicas
- Persistencia de sesión

### Carrito de Compras

- Agregar productos al carrito
- Eliminar productos del carrito
- Vaciar carrito completo
- Contador de productos
- Widget visual del carrito

### Navegación

- Barra de navegación responsive
- Menú móvil
- Enlaces dinámicos según estado de autenticación
- Footer informativo

### Notificaciones

- Mensajes de éxito y error
- Auto-dismiss después de 5 segundos
- Posicionamiento fijo
- Diseño consistente

## 🎨 Diseño y UX

- **Paleta de colores**: Azules y grises para un look profesional
- **Tipografía**: Sistema de fuentes consistente
- **Espaciado**: Sistema de padding y margin uniforme
- **Responsive**: Adaptable a todos los dispositivos
- **Accesibilidad**: Navegación por teclado y screen readers

## 🧪 Convenciones de Código

### Nomenclatura

- **Componentes**: PascalCase (ej: `NavBar.jsx`)
- **Hooks**: camelCase con prefijo "use" (ej: `useAuth.js`)
- **Archivos**: kebab-case para páginas (ej: `cart-page.jsx`)
- **Variables**: camelCase (ej: `isAuthenticated`)

### Estructura de Componentes

```jsx
// 1. Imports
import React from 'react';
import { useState } from 'react';

// 2. Componente
export const ComponentName = () => {
  // 3. Estados y hooks
  const [state, setState] = useState();

  // 4. Funciones
  const handleFunction = () => {};

  // 5. Render
  return <div>{/* JSX */}</div>;
};
```

### Contextos

- Un contexto por funcionalidad
- Hooks personalizados para usar contextos
- Separación de lógica y presentación

## 🚀 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run preview` - Vista previa de la construcción
- `npm run lint` - Linter de código

## 📦 Dependencias Principales

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.8.0",
  "firebase": "^9.17.0",
  "react-icons": "^4.7.0"
}
```

## 🔒 Seguridad

- Validación de formularios en frontend
- Rutas protegidas con autenticación
- Manejo seguro de errores
- Variables de entorno para credenciales

## 🐛 Solución de Problemas

### Error de Fast Refresh

Si encuentras errores de Fast Refresh, asegúrate de que cada archivo exporte solo un tipo de elemento (componente o hook).

### Problemas de Firebase

Verifica que las variables de entorno estén configuradas correctamente y que Firebase esté habilitado.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

Desarrollado como proyecto final del curso de React.

---

**Todo Pesca** - Tu tienda especializada en equipos de pesca deportiva 🎣
