import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { ROUTES, MESSAGES, VALIDATION } from '../constants';
import { getErrorMessage } from '../utils';
import { AuthLayout } from '../components/presentational/AuthLayout';
import { LoginForm } from '../components/presentational/LoginForm';

export const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validaciones básicas
    if (!formData.username.trim()) {
      setError(VALIDATION.REQUIRED_FIELDS.EMAIL);
      setLoading(false);
      return;
    }

    if (!formData.password.trim()) {
      setError(VALIDATION.REQUIRED_FIELDS.PASSWORD);
      setLoading(false);
      return;
    }

    try {
      await loginUser(formData.username, formData.password);
      navigate(ROUTES.HOME, {
        state: {
          message: MESSAGES.AUTH.LOGIN_SUCCESS,
        },
      });
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const loginProps = {
    formData,
    loading,
    error,
    onInputChange: handleInputChange,
    onSubmit: handleSubmit,
  };

  const layoutProps = {
    title: '¡Bienvenido de vuelta!',
    subtitle: 'Accede a tu cuenta y descubre los mejores productos de pesca',
    gradientColor: 'blue',
  };

  return (
    <AuthLayout {...layoutProps}>
      <LoginForm {...loginProps} />
    </AuthLayout>
  );
};
