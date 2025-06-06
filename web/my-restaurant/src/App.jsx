import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore';
import { restaurantdata as initialData } from './data.js';

// Función para importar datos iniciales (solo una vez)
// Asegúrate de eliminar o comentar esta función después de la primera ejecución para evitar duplicados
const importInitialData = async () => {
  try {
    const batch = [];
    
    for (const restaurant of initialData) {
      // Verificar si el restaurante ya existe
      const q = query(
        collection(db, "restaurantes"), 
        where("nombre", "==", restaurant.nombre)
      );
      const querySnapshot = await getDocs(q);
      
      // Solo agregar si no existe
      if (querySnapshot.empty) {
        batch.push(addDoc(collection(db, "restaurantes"), restaurant));
      } else {
        console.log(`Restaurante "${restaurant.nombre}" ya existe, se omitirá.`);
      }
    }

    if (batch.length > 0) {
      await Promise.all(batch);
      console.log(`${batch.length} nuevos restaurantes importados exitosamente`);
      fetchRestaurants(); // Actualiza la lista después de importar
    } else {
      console.log("No hay nuevos restaurantes para importar");
    }
  } catch (error) {
    console.error("Error al importar datos:", error);
  }
};

// Componente Navbar inlined
const Navbar = ({ setCurrentView }) => {
    return (
        <nav className="bg-gradient-to-r from-purple-700 to-indigo-800 p-4 shadow-xl">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <h1 className="text-white text-3xl font-bold mb-2 sm:mb-0">
                    <span className="font-serif">Restaurantes</span> <span className="font-light">Medellín</span>
                </h1>
                <ul className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
                    <li>
                        <button
                            onClick={() => setCurrentView('home')}
                            className="text-white hover:text-purple-300 transition duration-300 ease-in-out text-lg font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
                        >
                            Inicio
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setCurrentView('search')}
                            className="text-white hover:text-purple-300 transition duration-300 ease-in-out text-lg font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
                        >
                            Buscar
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setCurrentView('new-restaurant')}
                            className="text-white hover:text-purple-300 transition duration-300 ease-in-out text-lg font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
                        >
                            Añadir Restaurante
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

// Componente Home inlined
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
                    src={restaurant.imagen}
                    alt={restaurant.imagen}
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
                <strong className="font-semibold">Direccion:</strong> {restaurant.direccion}
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

// Componente NewRestaurant inlined
const NewRestaurant = ({ onAdd, goHome }) => {
    const [form, setForm] = useState({
        nombre: '',
        descripcion: '',
        direccion: '',
        horario: '',
        imagen: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "restaurantes"), {
                nombre: form.nombre,
                descripcion: form.descripcion,
                direccion: form.direccion,
                horarioAtencion: form.horario,
                imagen: form.imagen,
            });
            setForm({ nombre: '', descripcion: '', direccion: '', horario: '', imagen: '' });
            if (onAdd) onAdd();
            if (goHome) goHome();
        } catch (error) {
            console.error("Error al guardar restaurante:", error);
            alert("Error al guardar el restaurante");
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto my-10">
            <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-6 text-center">
                Añadir Nuevo Restaurante
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre" className="block text-lg font-medium text-gray-700 mb-1">
                        Nombre del Restaurante
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Ej. El Cielo"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="descripcion" className="block text-lg font-medium text-gray-700 mb-1">
                        Descripción
                    </label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        rows="4"
                        value={form.descripcion}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Una breve descripción del restaurante..."
                        required
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="direccion" className="block text-lg font-medium text-gray-700 mb-1">
                        Dirección
                    </label>
                    <input
                        type="text"
                        id="direccion"
                        name="direccion"
                        value={form.direccion}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Ej. Calle 7d #43c-36"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="horario" className="block text-lg font-medium text-gray-700 mb-1">
                        Horario de Atención
                    </label>
                    <input
                        type="text"
                        id="horario"
                        name="horario"
                        value={form.horario}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Ej. Abierto para almuerzo y cena"
                        required
                    />
                </div>
                                <div>
                    <label htmlFor="imagen" className="block text-lg font-medium text-gray-700 mb-1">
                        URL de la Imagen <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="url"
                        id="imagen"
                        name="imagen"
                        value={form.imagen}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Pega aquí la URL de la imagen (ej: https://...)"
                        required
                    />
                    <p className="text-sm text-gray-500 mt-1">
                        Debes pegar la URL directa de una imagen (por ejemplo, de Google Fotos, Imgur, etc).
                    </p>
                </div>

                {/* Vista previa de la imagen */}
                {form.imagen && (
                    <div className="mt-4">
                        <p className="text-lg font-medium text-gray-700 mb-2">Vista previa:</p>
                        <img
                            src={form.imagen}
                            alt="Vista previa"
                            className="w-full h-48 object-cover rounded-lg"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://placehold.co/400x250/FFD1DC/333333?text=Imagen+no+disponible";
                            }}
                        />
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 shadow-md hover:shadow-lg"
                >
                    Añadir Restaurante
                </button>
            </form>
        </div>
    );
};

// Componente Search inlined
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (!term) {
      setSearchResults([]);
      return;
    }

    setLoading(true);

    try {
      const querySnapshot = await getDocs(collection(db, "restaurantes"));
      const allRestaurants = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // Filtrado en el cliente (puedes optimizar con índices o queries más avanzadas si tienes muchos datos)
      const results = allRestaurants.filter((restaurant) =>
        (restaurant.imagen && restaurant.imagen.toLowerCase().includes(term)) ||
        (restaurant.nombre && restaurant.nombre.toLowerCase().includes(term)) ||
        (restaurant.descripcion && restaurant.descripcion.toLowerCase().includes(term)) ||
        (restaurant.tipoCocina && Array.isArray(restaurant.tipoCocina) && restaurant.tipoCocina.some(cuisine => cuisine.toLowerCase().includes(term))) ||
        (restaurant.direccion && restaurant.direccion.toLowerCase().includes(term))
      );
      setSearchResults(results);
    } catch (error) {
      console.error("Error al buscar restaurantes:", error);
      setSearchResults([]);
    }
    setLoading(false);
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
      {loading ? (
        <p className="text-center text-gray-500">Buscando...</p>
      ) : searchTerm && searchResults.length > 0 ? (
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
                  src={restaurant.imagen}
                  alt={restaurant.nombre}
                  className="w-full h-56 object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/FFD1DC/333333?text=Imagen+no+disponible"; }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2 font-serif">
                    {restaurant.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 font-light">
                    {restaurant.descripcion?.substring(0, 100)}...
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

// Componente principal de la aplicación
const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [restaurantdata, setRestaurantdata] = useState([]);

  const fetchRestaurants = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "restaurantes"));
      setRestaurantdata(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error("Error al obtener restaurantes:", error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    console.log("Vista actual:", currentView);
  }, [currentView]);

  // Función para renderizar el componente según la vista actual
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home restaurantdata={restaurantdata} />;
      case 'search':
        return <Search restaurantdata={restaurantdata} />;
      case 'new-restaurant':
        return <NewRestaurant onAdd={fetchRestaurants} goHome={() => setCurrentView('home')} />;
      default:
        return <Home restaurantdata={restaurantdata} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 font-sans">
      {/* Barra de navegación */}
      <Navbar setCurrentView={setCurrentView} />

      {/* Contenido principal de la aplicación */}
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {renderView()}
      </main>
    </div>
  );
};

export default App;
