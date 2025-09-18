import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Notification } from './components/Notification';
import { ProtectedRoute } from './components/ProtectedRoute';
import { PublicRoute } from './components/PublicRoute';
import { CartPage } from './pages/CartPage';
import { Checkout } from './pages/Checkout';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { AuthProvider } from './context/AuthContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { ROUTES } from './constants';

export const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <div className='min-h-screen flex flex-col'>
          <NavBar />
          <main className='flex-grow'>
            <Notification />
            <Routes>
              {/* Rutas públicas */}
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.CONTACT} element={<Contact />} />
              <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
              <Route
                path={ROUTES.PRODUCT_DETAIL}
                element={<ProductDetailPage />}
              />
              <Route path={ROUTES.CATEGORIES} element={<CategoriesPage />} />
              <Route
                path={ROUTES.CATEGORY_PRODUCTS}
                element={<ProductsPage />}
              />

              {/* Rutas de autenticación (solo para usuarios no autenticados) */}
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

              {/* Rutas protegidas (solo para usuarios autenticados) */}
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
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
};
