import React, { useState } from 'react';

const Search = ({ restaurantdata }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const results = restaurantdata.filter((restaurant) =>
      restaurant.nombre.toLowerCase().includes(term) ||
      restaurant.descripcion.toLowerCase().includes(term) ||
      (restaurant.tipoCocina && restaurant.tipoCocina.some(cuisine => cuisine.toLowerCase().includes(term))) ||
      restaurant.direccion.toLowerCase().includes(term)
    );
    setSearchResults(results);
  };

  return (
    <div className="bg-white py-8 px-4 shadow-xl rounded-lg border-t-4 border-purple-600">
      <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-6 text-center">
        Encuentra tu Restaurante Ideal
      </h2>
      <div className="mb-6">
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 shadow-sm font-light text-gray-700"
          placeholder="Buscar por nombre, descripción, tipo de cocina o dirección..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {searchTerm && searchResults.length > 0 ? (
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Resultados de la búsqueda:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchResults.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border-b-2 border-indigo-500 cursor-pointer"
              >
                <img
                  src={`https://placehold.co/400x250/FFD1DC/333333?text=${encodeURIComponent(restaurant.nombre)}`}
                  alt={restaurant.nombre}
                  className="w-full h-56 object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/FFD1DC/333333?text=Imagen+no+disponible"; }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2 font-serif">
                    {restaurant.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 font-light">
                    {restaurant.descripcion.substring(0, 100)}...
                  </p>
                  <p className="text-gray-700 text-sm mb-1">
                    <strong className="font-semibold">Dirección:</strong> {restaurant.direccion}
                  </p>
                  {restaurant.tipoCocina && (
                    <p className="text-gray-700 text-sm mb-1">
                      <strong className="font-semibold">Tipo de Cocina:</strong>{' '}
                      {restaurant.tipoCocina.join(', ')}
                    </p>
                  )}
                  <p className="text-gray-700 text-sm">
                    <strong className="font-semibold">Horario:</strong> {restaurant.horarioAtencion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : searchTerm && searchResults.length === 0 ? (
        <p className="text-gray-600 italic text-center text-lg">
          No se encontraron restaurantes que coincidan con tu búsqueda.
        </p>
      ) : (
        <p className="text-gray-600 italic text-center text-lg">
          Ingresa un término de búsqueda para encontrar restaurantes.
        </p>
      )}
    </div>
  );
};

export default Search;
