import envios from '../assets/envios.jpg';
import cuotas from '../assets/cuotas.jpg';
import promociones from '../assets/promociones.jpg';

export const Home = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'>
          <div className='aspect-square overflow-hidden'>
            <img
              src={envios}
              alt='Envíos gratis'
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          <div className='absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
            <h3 className='text-2xl font-bold mb-2'>Envíos Gratis</h3>
            <p className='text-lg opacity-90'>
              A todo el país sin costo adicional
            </p>
          </div>
          <div className='absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
            ¡Gratis!
          </div>
        </div>

        <div className='group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'>
          <div className='aspect-square overflow-hidden'>
            <img
              src={cuotas}
              alt='Cuotas sin interés'
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          <div className='absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
            <h3 className='text-2xl font-bold mb-2'>Cuotas Sin Interés</h3>
            <p className='text-lg opacity-90'>
              Financia tus compras en hasta 12 cuotas
            </p>
          </div>
          <div className='absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
            0% INT
          </div>
        </div>

        <div className='group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1'>
          <div className='aspect-square overflow-hidden'>
            <img
              src={promociones}
              alt='Promociones especiales'
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          <div className='absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
            <h3 className='text-2xl font-bold mb-2'>Promociones</h3>
            <p className='text-lg opacity-90'>
              Ofertas especiales y descuentos exclusivos
            </p>
          </div>
          <div className='absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
            -50%
          </div>
        </div>
      </div>
    </div>
  );
};
