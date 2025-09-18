# Arquitectura de Componentes

Este documento describe la arquitectura de componentes implementada en el proyecto, siguiendo el patrón Container/Presentational Components.

## 📁 Estructura de Directorios

```
src/
├── components/
│   ├── presentational/     # Componentes presentacionales puros
│   │   ├── AuthLayout.jsx
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   │   ├── NavBarBrand.jsx
│   │   ├── NavBarLinks.jsx
│   │   ├── UserProfile.jsx
│   │   ├── AuthButtons.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── FooterContent.jsx
│   │   ├── CartWidgetDisplay.jsx
│   │   └── NotificationDisplay.jsx
│   ├── NavBar.jsx          # Contenedor
│   ├── Footer.jsx          # Contenedor
│   ├── CartWidget.jsx      # Contenedor
│   └── Notification.jsx    # Contenedor
├── auth/
│   ├── Login.jsx           # Contenedor
│   └── Register.jsx        # Contenedor
└── ...
```

## 🏗️ Patrón Container/Presentational

### Componentes Contenedores (Smart Components)

**Responsabilidades:**

- Manejo de estado y lógica de negocio
- Integración con hooks y contextos
- Llamadas a servicios y APIs
- Gestión de efectos secundarios
- Mínimo HTML y estilos

**Características:**

- Contienen lógica de negocio
- Manejan estado local y global
- Se conectan con servicios externos
- Pasan datos a componentes presentacionales
- Reciben callbacks de componentes presentacionales

**Ejemplo:**

```jsx
// Login.jsx - Contenedor
export const Login = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    // Lógica de negocio
  };

  const loginProps = {
    formData,
    loading,
    onInputChange: handleInputChange,
    onSubmit: handleSubmit,
  };

  return (
    <AuthLayout {...layoutProps}>
      <LoginForm {...loginProps} />
    </AuthLayout>
  );
};
```

### Componentes Presentacionales (Dumb Components)

**Responsabilidades:**

- Renderizado de UI
- Manejo de eventos de usuario
- Estilos y clases CSS
- Estructura HTML

**Características:**

- Son funciones puras
- Reciben datos via props
- No manejan estado complejo
- Son reutilizables
- Fáciles de testear

**Ejemplo:**

```jsx
// LoginForm.jsx - Presentacional
export const LoginForm = ({ formData, loading, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className='space-y-6'>
      <input
        value={formData.username}
        onChange={onInputChange}
        className='w-full pl-10 pr-4 py-3...'
      />
      <button type='submit' disabled={loading}>
        {loading ? 'Cargando...' : 'Iniciar Sesión'}
      </button>
    </form>
  );
};
```

## 📋 Convenciones de Naming

### Contenedores

- **Naming**: PascalCase simple (`Login.jsx`, `NavBar.jsx`)
- **Ubicación**: Directorio raíz de componentes o páginas
- **Sufijo**: Sin sufijo especial

### Presentacionales

- **Naming**: PascalCase descriptivo (`LoginForm.jsx`, `NavBarBrand.jsx`)
- **Ubicación**: `src/components/presentational/`
- **Sufijo**: Descriptivo del propósito (`Form`, `Display`, `Content`, `Layout`)

### Props

- **Naming**: camelCase descriptivo
- **Agrupación**: Objetos con nombres descriptivos
- **Consistencia**: Mismos nombres para props similares

```jsx
// ✅ Buenas prácticas
const userProfileProps = {
  user,
  onLogout: handleLogout,
};

const formProps = {
  formData,
  loading,
  error,
  onInputChange: handleInputChange,
  onSubmit: handleSubmit,
};

// ❌ Evitar
const props = {
  data: user,
  fn: handleLogout,
};
```

## 🎯 Beneficios de esta Arquitectura

### 1. **Separación de Responsabilidades**

- Lógica de negocio separada de presentación
- Componentes más fáciles de mantener
- Testing más simple y enfocado

### 2. **Reutilización**

- Componentes presentacionales reutilizables
- Lógica de negocio centralizada
- Menos duplicación de código

### 3. **Testabilidad**

- Componentes presentacionales fáciles de testear
- Mocks simples para contenedores
- Tests más rápidos y confiables

### 4. **Mantenibilidad**

- Cambios de UI no afectan lógica
- Cambios de lógica no afectan UI
- Código más legible y organizado

### 5. **Escalabilidad**

- Fácil agregar nuevas funcionalidades
- Estructura predecible
- Onboarding más rápido para nuevos desarrolladores

## 📝 Guías de Implementación

### Crear un Nuevo Contenedor

1. **Identificar responsabilidades:**

   - ¿Maneja estado?
   - ¿Hace llamadas a APIs?
   - ¿Integra con contextos?

2. **Crear estructura mínima:**

   ```jsx
   export const MiContenedor = () => {
     // Estado y lógica
     const [state, setState] = useState();

     // Handlers
     const handleAction = () => {};

     // Props para presentacional
     const props = {
       data: state,
       onAction: handleAction,
     };

     return <MiPresentacional {...props} />;
   };
   ```

3. **Crear componente presentacional:**
   ```jsx
   export const MiPresentacional = ({ data, onAction }) => {
     return <div className='estilos'>{/* UI pura */}</div>;
   };
   ```

### Migrar Componente Existente

1. **Identificar lógica vs presentación**
2. **Extraer UI a componente presentacional**
3. **Mantener lógica en contenedor**
4. **Pasar datos via props**
5. **Testear ambos componentes**

## 🔍 Ejemplos de Refactoring

### Antes (Componente Monolítico)

```jsx
export const Login = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async e => {
    // Lógica compleja
  };

  return (
    <div className='min-h-screen...'>
      <div className='max-w-6xl...'>
        <div className='bg-white...'>{/* 200+ líneas de JSX */}</div>
      </div>
    </div>
  );
};
```

### Después (Container/Presentational)

```jsx
// Contenedor - Solo lógica
export const Login = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async e => {
    // Lógica compleja
  };

  const props = { formData, onInputChange, onSubmit };

  return (
    <AuthLayout>
      <LoginForm {...props} />
    </AuthLayout>
  );
};

// Presentacional - Solo UI
export const LoginForm = ({ formData, onInputChange, onSubmit }) => {
  return <form onSubmit={onSubmit}>{/* UI pura */}</form>;
};
```

## 📊 Métricas de Calidad

### Contenedores

- **Líneas de JSX**: < 20 líneas
- **Complejidad ciclomática**: < 10
- **Responsabilidades**: 1-2 por componente

### Presentacionales

- **Props**: < 10 props por componente
- **Reutilización**: Mínimo 2 usos
- **Testabilidad**: 100% cobertura de props

## 🚀 Próximos Pasos

1. **Aplicar patrón a componentes restantes**
2. **Crear tests para componentes presentacionales**
3. **Documentar props de cada componente**
4. **Implementar Storybook para presentacionales**
5. **Crear guías de estilo para nuevos desarrolladores**

---

Esta arquitectura asegura un código más mantenible, testeable y escalable, siguiendo las mejores prácticas de React y el patrón Container/Presentational Components.
