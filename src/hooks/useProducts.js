import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Datos mock de productos
const mockProducts = [
  {
    id: 1,
    name: 'Caña de Pescar Spinning',
    price: 15000,
    category: 'cañas',
    image: '/api/placeholder/300/200',
    description:
      'Caña de pescar spinning profesional para principiantes y expertos.',
    specifications: {
      longitud: '2.10m',
      accion: 'Media',
      potencia: '10-30g',
      secciones: '2',
      material: 'Fibra de carbono',
    },
    features: [
      'Guías de cerámica de alta calidad',
      'Empuñadura de corcho natural',
      'Portacarretes de aluminio',
      'Punta sensible para detectar picadas',
      'Diseño ergonómico para comodidad',
    ],
  },
  {
    id: 2,
    name: 'Carrete Spinning 3000',
    price: 8000,
    category: 'carretes',
    image: '/api/placeholder/300/200',
    description: 'Carrete spinning de alta calidad con sistema de freno suave.',
    specifications: {
      capacidad: '0.30mm/150m',
      rodamientos: '6+1',
      ratio: '5.2:1',
      peso: '280g',
      material: 'Aluminio y grafito',
    },
    features: [
      'Sistema de freno suave y progresivo',
      'Bobina de aluminio anodizado',
      'Mecanismo de recuperación suave',
      'Diseño anti-corrosión',
      'Mango ergonómico',
    ],
  },
  {
    id: 3,
    name: 'Señuelo Crankbait',
    price: 2500,
    category: 'señuelos',
    image: '/api/placeholder/300/200',
    description: 'Señuelo crankbait para pesca de depredadores.',
    specifications: {
      longitud: '7cm',
      peso: '12g',
      profundidad: '1-3m',
      colores: 'Disponible en 5 colores',
      material: 'Plástico ABS',
    },
    features: [
      'Acción de natación realista',
      'Colores vibrantes y duraderos',
      'Anzuelos triples de acero inoxidable',
      'Diseño hidrodinámico',
      'Ideal para depredadores',
    ],
  },
  {
    id: 4,
    name: 'Caña de Pescar Fly',
    price: 22000,
    category: 'cañas',
    image: '/api/placeholder/300/200',
    description: 'Caña de pesca con mosca para ríos y arroyos.',
    specifications: {
      longitud: '2.70m',
      accion: 'Media-Rápida',
      potencia: '5wt',
      secciones: '4',
      material: 'Fibra de carbono',
    },
    features: [
      'Diseño específico para pesca con mosca',
      'Acción suave para lanzamientos precisos',
      'Guías de cerámica de alta calidad',
      'Empuñadura de corcho natural',
      'Ideal para ríos y arroyos',
    ],
  },
  {
    id: 5,
    name: 'Carrete Fly 5/6',
    price: 12000,
    category: 'carretes',
    image: '/api/placeholder/300/200',
    description: 'Carrete para pesca con mosca, tamaño 5/6.',
    specifications: {
      capacidad: 'WF5F + 100m backing',
      rodamientos: '4+1',
      ratio: '1:1',
      peso: '180g',
      material: 'Aluminio',
    },
    features: [
      'Diseño específico para pesca con mosca',
      'Sistema de freno de disco',
      'Bobina de aluminio anodizado',
      'Mecanismo de recuperación suave',
      'Diseño anti-corrosión',
    ],
  },
  {
    id: 6,
    name: 'Señuelo Spinner',
    price: 1800,
    category: 'señuelos',
    image: '/api/placeholder/300/200',
    description: 'Señuelo spinner giratorio para múltiples especies.',
    specifications: {
      longitud: '5cm',
      peso: '8g',
      profundidad: '0.5-2m',
      colores: 'Disponible en 8 colores',
      material: 'Metal y plástico',
    },
    features: [
      'Acción giratoria atractiva',
      'Colores vibrantes y duraderos',
      'Anzuelo simple de acero inoxidable',
      'Diseño hidrodinámico',
      'Ideal para múltiples especies',
    ],
  },
];

const categories = [
  { id: 'cañas', name: 'Cañas de Pescar', productCount: 2 },
  { id: 'carretes', name: 'Carretes', productCount: 2 },
  { id: 'señuelos', name: 'Señuelos', productCount: 2 },
];

export const useProducts = () => {
  const { categoryId, id } = useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar productos por categoría
  useEffect(() => {
    setLoading(true);
    setError(null);

    // Simular carga de datos
    setTimeout(() => {
      try {
        let filteredProducts = mockProducts;

        if (categoryId) {
          filteredProducts = mockProducts.filter(
            product => product.category === categoryId
          );
        }

        setProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        setError('Error al cargar los productos');
        setLoading(false);
      }
    }, 500);
  }, [categoryId]);

  // Cargar producto específico
  useEffect(() => {
    if (id) {
      setLoading(true);
      setError(null);

      setTimeout(() => {
        try {
          const foundProduct = mockProducts.find(p => p.id === parseInt(id));
          setProduct(foundProduct);
          setLoading(false);
        } catch (error) {
          setError('Error al cargar el producto');
          setLoading(false);
        }
      }, 500);
    }
  }, [id]);

  // Obtener categoría actual
  const getCurrentCategory = () => {
    return categories.find(cat => cat.id === categoryId);
  };

  // Obtener todas las categorías
  const getAllCategories = () => {
    return categories;
  };

  // Buscar productos
  const searchProducts = query => {
    return mockProducts.filter(
      product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
  };

  // Obtener productos relacionados
  const getRelatedProducts = (currentProductId, limit = 4) => {
    const currentProduct = mockProducts.find(p => p.id === currentProductId);
    if (!currentProduct) return [];

    return mockProducts
      .filter(
        p => p.id !== currentProductId && p.category === currentProduct.category
      )
      .slice(0, limit);
  };

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
