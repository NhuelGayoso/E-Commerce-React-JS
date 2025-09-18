# Configuración de Variables de Entorno

Para configurar el proyecto, crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

## Firebase Configuration

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## App Configuration

```env
VITE_APP_NAME=Todo Pesca
VITE_APP_DESCRIPTION=Tu tienda especializada en equipos de pesca
VITE_APP_URL=http://localhost:5173
```

## Cómo obtener las credenciales de Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto o crea uno nuevo
3. Ve a Project Settings (Configuración del proyecto)
4. En la pestaña "General", busca "Your apps"
5. Si no tienes una app web, haz clic en "Add app" y selecciona el ícono web
6. Copia los valores de configuración y pégalos en tu archivo `.env`

## Importante

- **NUNCA** subas el archivo `.env` al repositorio
- El archivo `.env` ya está incluido en `.gitignore`
- Las variables que empiezan con `VITE_` son accesibles en el frontend
- Reinicia el servidor de desarrollo después de cambiar las variables de entorno
