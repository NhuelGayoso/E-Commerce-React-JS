import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useNavigation = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [previousPath, setPreviousPath] = useState(null);

  // Detectar cambios de ruta
  useEffect(() => {
    setPreviousPath(location.pathname);
  }, [location.pathname]);

  // Navegar a una ruta específica
  const goTo = (path, options = {}) => {
    navigate(path, options);
  };

  // Navegar hacia atrás
  const goBack = () => {
    navigate(-1);
  };

  // Navegar hacia adelante
  const goForward = () => {
    navigate(1);
  };

  // Reemplazar la ruta actual
  const replace = (path, options = {}) => {
    navigate(path, { ...options, replace: true });
  };

  // Obtener parámetros de la URL
  const getParams = () => params;

  // Obtener un parámetro específico
  const getParam = key => params[key];

  // Obtener query parameters
  const getQueryParams = () => {
    const searchParams = new URLSearchParams(location.search);
    const queryParams = {};
    for (const [key, value] of searchParams.entries()) {
      queryParams[key] = value;
    }
    return queryParams;
  };

  // Obtener un query parameter específico
  const getQueryParam = key => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(key);
  };

  // Verificar si estamos en una ruta específica
  const isCurrentPath = path => {
    return location.pathname === path;
  };

  // Verificar si la ruta actual coincide con un patrón
  const matchesPath = pattern => {
    const regex = new RegExp(pattern.replace(/:\w+/g, '[^/]+'));
    return regex.test(location.pathname);
  };

  return {
    params,
    location,
    previousPath,
    goTo,
    goBack,
    goForward,
    replace,
    getParams,
    getParam,
    getQueryParams,
    getQueryParam,
    isCurrentPath,
    matchesPath,
  };
};
