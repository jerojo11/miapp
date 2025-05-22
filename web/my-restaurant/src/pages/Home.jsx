import React from 'react';

const Home = ({ restaurantdata }) => {
  return (
    <div className="py-8 px-4">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center font-serif">
        Descubre los Mejores Restaurantes de Medellín
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {restaurantdata.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-t-4 border-indigo-600 cursor-pointer"
          >
            <img
              src={`https://placehold.co/400x250/FFD1DC/333333?text=${encodeURIComponent(restaurant.nombre)}`}
              alt={restaurant.nombre}
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/FFD1DC/333333?text=Imagen+no+disponible"; }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-indigo-800 mb-3 font-serif">
                {restaurant.nombre}
              </h3>
              <p className="text-gray-700 text-base mb-4 line-clamp-3">
                {restaurant.descripcion}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <strong className="font-semibold">Dirección:</strong> {restaurant.direccion}
              </p>
              <p className="text-gray-600 text-sm">
                <strong className="font-semibold">Horario:</strong> {restaurant.horarioAtencion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
