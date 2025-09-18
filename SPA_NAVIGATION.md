# Navegación SPA con React Router

Este documento describe la implementación completa de navegación SPA (Single Page Application) utilizando React Router, incluyendo rutas dinámicas, NavLinks con indicadores activos, y manejo de parámetros URL.

## 🗺️ Estructura de Rutas

### Rutas Estáticas

```javascript
export const ROUTES = {
  HOME: '/', // Página de inicio
  LOGIN: '/login', // Página de login
  REGISTER: '/register', // Página de registro
  CONTACT: '/contact', // Página de contacto
  CART: '/cart', // Carrito de compras
  CHECKOUT: '/checkout', // Proceso de checkout
  PRODUCTS: '/products', // Lista de productos
  CATEGORIES: '/categories', // Lista de categorías
};
```

### Rutas Dinámicas

```javascript
export const ROUTES = {
  PRODUCT_DETAIL: '/products/:id', // Detalle de producto
  CATEGORY_PRODUCTS: '/categories/:categoryId', // Productos por categoría
};
```

## 🧭 Componentes de Navegación

### NavLinkWithActive

Componente presentacional que proporciona indicadores visuales de ruta activa:

```jsx
export const NavLinkWithActive = ({ to, children, className = '' }) => {
  const baseClasses =
    'px-3 py-2 text-sm font-medium transition-colors duration-200';
  const activeClasses = 'text-blue-600 bg-blue-50 rounded-md';
  const inactiveClasses = 'text-gray-600 hover:text-blue-600';

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${baseClasses} ${
          isActive ? activeClasses : inactiveClasses
        } ${className}`
      }
    >
      {children}
    </NavLink>
  );
};
```

**Características:**

- Indicadores visuales automáticos de ruta activa
- Estilos diferenciados para estado activo/inactivo
- Transiciones suaves entre estados
- Reutilizable en toda la aplicación

## 🔗 Implementación de Rutas

### App.jsx - Configuración de Rutas

```jsx
<Routes>
  {/* Rutas públicas */}
  <Route path={ROUTES.HOME} element={<Home />} />
  <Route path={ROUTES.CONTACT} element={<Contact />} />
  <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
  <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetailPage />} />
  <Route path={ROUTES.CATEGORIES} element={<CategoriesPage />} />
  <Route path={ROUTES.CATEGORY_PRODUCTS} element={<ProductsPage />} />

  {/* Rutas de autenticación */}
  <Route
    path={ROUTES.LOGIN}
    element={
      <PublicRoute>
        <Login />
      </PublicRoute>
    }
  />
  <Route
    path={ROUTES.REGISTER}
    element={
      <PublicRoute>
        <Register />
      </PublicRoute>
    }
  />

  {/* Rutas protegidas */}
  <Route
    path={ROUTES.CART}
    element={
      <ProtectedRoute>
        <CartPage />
      </ProtectedRoute>
    }
  />
  <Route
    path={ROUTES.CHECKOUT}
    element={
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    }
  />
</Routes>
```

## 🎯 Hooks Personalizados

### useNavigation

Hook personalizado para manejo avanzado de navegación:

```jsx
export const useNavigation = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  return {
    params, // Parámetros de URL
    location, // Información de ubicación actual
    goTo, // Navegar a ruta específica
    goBack, // Navegar hacia atrás
    goForward, // Navegar hacia adelante
    replace, // Reemplazar ruta actual
    getParams, // Obtener todos los parámetros
    getParam, // Obtener parámetro específico
    getQueryParams, // Obtener query parameters
    getQueryParam, // Obtener query parameter específico
    isCurrentPath, // Verificar ruta actual
    matchesPath, // Verificar patrón de ruta
  };
};
```

### useProducts

Hook personalizado para manejo de productos y categorías:

```jsx
export const useProducts = () => {
  const { categoryId, id } = useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Detectar cambios de categoría
  useEffect(() => {
    // Lógica de carga de productos
  }, [categoryId]);

  // Detectar cambios de producto
  useEffect(() => {
    // Lógica de carga de producto específico
  }, [id]);

  return {
    products,
    product,
    loading,
    error,
    categories,
    getCurrentCategory,
    getAllCategories,
    searchProducts,
    getRelatedProducts,
  };
};
```

## 📱 Páginas Implementadas

### ProductsPage

- **Ruta**: `/products` y `/categories/:categoryId`
- **Funcionalidades**:
  - Lista de productos con filtrado por categoría
  - Filtros de categoría con indicadores activos
  - Grid responsivo de productos
  - Enlaces a detalle de producto
  - Estados de carga y error

### ProductDetailPage

- **Ruta**: `/products/:id`
- **Funcionalidades**:
  - Detalle completo del producto
  - Breadcrumb de navegación
  - Especificaciones y características
  - Selector de cantidad
  - Agregar al carrito
  - Productos relacionados
  - Estados de carga y error

### CategoriesPage

- **Ruta**: `/categories`
- **Funcionalidades**:
  - Grid de categorías con imágenes
  - Enlaces a productos por categoría
  - Contador de productos por categoría
  - Call-to-action para soporte

## 🎨 Indicadores de Ruta Activa

### NavBar

```jsx
<NavLinkWithActive to={ROUTES.HOME}>Inicio</NavLinkWithActive>
<NavLinkWithActive to={ROUTES.PRODUCTS}>Productos</NavLinkWithActive>
<NavLinkWithActive to={ROUTES.CATEGORIES}>Categorías</NavLinkWithActive>
<NavLinkWithActive to={ROUTES.CONTACT}>Contacto</NavLinkWithActive>
```

### Mobile Menu

```jsx
<NavLinkWithActive to={ROUTES.HOME} className='block text-base font-medium'>
  Inicio
</NavLinkWithActive>
```

### Footer

```jsx
<NavLinkWithActive to={ROUTES.HOME} className='text-sm'>
  Inicio
</NavLinkWithActive>
```

## 🔄 Detección de Cambios de URL

### useParams para Parámetros

```jsx
const { id, categoryId } = useParams();

// Detectar cambios de producto
useEffect(() => {
  if (id) {
    // Cargar producto específico
  }
}, [id]);

// Detectar cambios de categoría
useEffect(() => {
  if (categoryId) {
    // Filtrar productos por categoría
  }
}, [categoryId]);
```

### useLocation para Navegación

```jsx
const location = useLocation();

useEffect(() => {
  // Detectar cambios de ruta
  console.log('Nueva ruta:', location.pathname);
}, [location.pathname]);
```

## 🚀 Funcionalidades Avanzadas

### Breadcrumb Navigation

```jsx
<nav className='mb-8'>
  <ol className='flex items-center space-x-2 text-sm text-gray-500'>
    <li>
      <Link to={ROUTES.HOME}>Inicio</Link>
    </li>
    <li>/</li>
    <li>
      <Link to={ROUTES.PRODUCTS}>Productos</Link>
    </li>
    <li>/</li>
    <li>
      <Link to={`${ROUTES.CATEGORIES}/${product.category}`}>
        {product.category}
      </Link>
    </li>
    <li>/</li>
    <li className='text-gray-900 font-medium'>{product.name}</li>
  </ol>
</nav>
```

### Filtros de Categoría

```jsx
<div className='flex flex-wrap gap-2'>
  <Link
    to={ROUTES.PRODUCTS}
    className={`px-4 py-2 rounded-lg ${
      !categoryId ? 'bg-blue-600 text-white' : 'bg-gray-100'
    }`}
  >
    Todas las categorías
  </Link>
  {categories.map(category => (
    <Link
      key={category.id}
      to={`${ROUTES.CATEGORIES}/${category.id}`}
      className={`px-4 py-2 rounded-lg ${
        categoryId === category.id ? 'bg-blue-600 text-white' : 'bg-gray-100'
      }`}
    >
      {category.name}
    </Link>
  ))}
</div>
```

### Navegación Programática

```jsx
const navigate = useNavigate();

const handleAddToCart = () => {
  addProduct(product);
  navigate(ROUTES.CART, {
    state: {
      message: `${product.name} agregado al carrito`,
    },
  });
};
```

## 📊 Beneficios de la Implementación

### 1. **UX Mejorada**

- Indicadores visuales de ruta activa
- Navegación fluida sin recargas
- Breadcrumbs para orientación
- Estados de carga y error

### 2. **SEO Friendly**

- URLs semánticas y descriptivas
- Estructura de rutas lógica
- Navegación accesible

### 3. **Mantenibilidad**

- Hooks personalizados reutilizables
- Separación de responsabilidades
- Código modular y organizado

### 4. **Escalabilidad**

- Fácil agregar nuevas rutas
- Patrón consistente de navegación
- Hooks extensibles

## 🔧 Configuración Técnica

### Router Setup

```jsx
// main.jsx
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

### Route Protection

```jsx
// Rutas protegidas
<Route
  path={ROUTES.CART}
  element={
    <ProtectedRoute>
      <CartPage />
    </ProtectedRoute>
  }
/>

// Rutas públicas (solo no autenticados)
<Route
  path={ROUTES.LOGIN}
  element={
    <PublicRoute>
      <Login />
    </PublicRoute>
  }
/>
```

## 📝 Mejores Prácticas Implementadas

1. **Rutas Semánticas**: URLs descriptivas y fáciles de entender
2. **Indicadores Activos**: Feedback visual claro de la ruta actual
3. **Navegación Consistente**: Patrón uniforme en toda la aplicación
4. **Hooks Personalizados**: Lógica reutilizable y testeable
5. **Estados de Carga**: UX mejorada con indicadores de progreso
6. **Manejo de Errores**: Páginas de error informativas
7. **Responsive Design**: Navegación optimizada para móviles

---

Esta implementación proporciona una experiencia de navegación SPA completa, moderna y profesional, siguiendo las mejores prácticas de React Router y UX design. 🚀
