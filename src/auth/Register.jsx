import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';
import { ROUTES, MESSAGES, VALIDATION } from '../constants';
import { getErrorMessage } from '../utils';
import { AuthLayout } from '../components/presentational/AuthLayout';
import { RegisterForm } from '../components/presentational/RegisterForm';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    terms: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validaciones básicas
    if (!formData.name.trim()) {
      setError(VALIDATION.REQUIRED_FIELDS.NAME);
      setLoading(false);
      return;
    }

    if (!formData.email.trim()) {
      setError(VALIDATION.REQUIRED_FIELDS.EMAIL);
      setLoading(false);
      return;
    }

    if (formData.password.length < VALIDATION.PASSWORD_MIN_LENGTH) {
      setError(
        `La contraseña debe tener al menos ${VALIDATION.PASSWORD_MIN_LENGTH} caracteres`
      );
      setLoading(false);
      return;
    }

    if (!formData.terms) {
      setError(VALIDATION.REQUIRED_FIELDS.TERMS);
      setLoading(false);
      return;
    }

    try {
      await registerUser(formData.email, formData.password);
      navigate(ROUTES.LOGIN, {
        state: {
          message: MESSAGES.AUTH.REGISTER_SUCCESS,
        },
      });
    } catch (error) {
      console.error('Error al registrar:', error);
      setError(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const registerProps = {
    formData,
    loading,
    error,
    onInputChange: handleInputChange,
    onSubmit: handleSubmit,
  };

  const layoutProps = {
    title: '¡Únete a nosotros!',
    subtitle: 'Crea tu cuenta y accede a los mejores productos de pesca',
    gradientColor: 'green',
  };

  return (
    <AuthLayout {...layoutProps}>
      <RegisterForm {...registerProps} />
    </AuthLayout>
  );
};
