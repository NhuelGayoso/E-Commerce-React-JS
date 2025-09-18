import { useAuth } from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirigir al login con la ruta actual como state
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
