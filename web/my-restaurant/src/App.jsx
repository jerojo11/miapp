import React, { useState } from 'react';

// Datos de los restaurantes (previamente en data.js)
export const restaurantdata = [
  {
    id: "el-cielo",
    nombre: "El Cielo",
    descripcion:
      "Posible experiencia con estrellas Michelin, experiencia sensorial de 22 platos, #47 entre los mejores restaurantes de América del Sur, menú degustación lúdico de alta y baja cocina, conocido por la experiencia de lavado de manos con chocolate. El chef Juan Manuel Barrientos es una figura clave.",
    direccion: "Calle 7d #43c-36",
    imagen: "/images/cielo.jpg",
    horarioAtencion: "Abierto para almuerzo y cena (confirmado en su sitio web)",
  },
  {
    id: "carmen",
    nombre: "Carmen",
    descripcion:
      "Trabaja con ingredientes locales de alta calidad, sucursales en Cartagena y Medellín, parte de un grupo que incluye XO y Moshi, conocido por su elegante entorno y jardín. Celebridades como Tom Cruise han cenado aquí.",
    direccion: "Cra. 36 #10a-27",
      imagen: "/images/carmen.jpg",
    horarioAtencion: "12:30–14:30 y 18:30–21:30 (confirmado en su sitio web)",
  },
  {
    id: "xo",
    nombre: "XO",
    descripcion:
      "Parte del grupo Carmen, celebra la biodiversidad colombiana, menú degustación de 13 platos, se centra en mariscos capturados de forma sostenible. Los chefs Rob Pevitts, Mateo Ríos y Sebastián Marín son figuras clave.",
    direccion: "Cra. 36 #10a-45",
      imagen: "/images/xo.jpg",
    horarioAtencion: "Probablemente similar al de Carmen dada la propiedad compartida",
  },
  {
    id: "ocio",
    nombre: "Ocio / Oci.Mde",
    descripcion:
      "Comida de alta calidad para el almuerzo o la cena, versiones elevadas de clásicos caseros, menú de temporada, conocido por sus alimentos cocinados a fuego lento. La chef Laura Londoño es una figura clave.",
    direccion: "Cra 33 #7-21",
    imagen: "/images/ocio.jpg",
    horarioAtencion: "12:00–14:30 y 18:30–22:30 (el sitio web confirma horarios similares)",
  },
  {
    id: "in-situ",
    nombre: "In Situ",
    descripcion:
      "Ubicado dentro de los jardines botánicos de Medellín, espacio moderno al aire libre, versiones contemporáneas de sabores colombianos tradicionales.",
    direccion: "Calle 73 N #51D-14",
    imagen: "images/situ.jpg",
    horarioAtencion: "Probablemente se alinea con el horario del jardín botánico",
  },
  {
    id: "la-provincia",
    nombre: "La Provincia",
    descripcion:
      "Sirviendo desde 1993, restaurante de lujo, ambiente acogedor. Conocido por sus tortellini de caracoles.",
    direccion: "Cra. 42 #3 Sur 81 Local 303",
      imagen: "/images/provincia.jpg",
    horarioAtencion: "No se menciona explícitamente",
  },
  {
    id: "moshi-sushi-bar",
    nombre: "Moshi Sushi Bar",
    descripcion:
      "Concepto del mismo equipo de Carmen y XO, utiliza ingredientes locales sostenibles de alta calidad, ofrece estilo omakase, experiencia íntima con chefs presentando la comida.",
    direccion: "Cra. 36 #10A-45",
      imagen: "/images/moshi.jpg",
    horarioAtencion: "No se menciona explícitamente",
  },
  {
    id: "herbario",
    nombre: "Herbario",
    descripcion:
      "En un antiguo almacén, presenta ingredientes e influencias de todo el país. Se menciona al chef Rodrigo Isaza.",
    direccion: "Cra 43D #1030",
      imagen: "/images/herbario.jpg",
    horarioAtencion: "No se menciona explícitamente",
  },
  {
    id: "sambonbi",
    nombre: "Sambombi Bistró Local",
    descripcion:
      "Verdadera cocina de la granja a la mesa, restaurante discreto con sede en Provenza, cocina hiperlocal sostenible, superando los límites, calificado como de los mejores por una fuente. Se menciona al chef Jhon Zárate.",
    direccion: "Cra. 35 #7-10",
      imagen: "/images/sambonbi.jpg",
    horarioAtencion: "No se menciona explícitamente",
  },
  {
    id: "relato",
    nombre: "Relato",
    descripcion:
      "Alta cocina en Provenza, combina varios sabores internacionales.",
    direccion: "Cra 33 # 7-115",
      imagen: "/images/relato.jpg",
    horarioAtencion: "12–3:30 PM, 6–10:30 PM",
  },
  {
    id: "barbaro",
    nombre: "Bárbaro Cocina Primitiva sede Poblado",
    descripcion:
      "Popular asador, se centra en sabores intensos y técnicas de cocción lenta, cortes de carne y mariscos de primera calidad.",
    direccion: "Cra. 37 #10a-23",
      imagen: "/images/barbaro.jpg",
    horarioAtencion: "No se menciona explícitamente",
  },
  {
    id: "la-chagra",
    nombre: "La Chagra (Sabores Amazónicos) / Jura Kub",
    descripcion:
      "Experiencia culinaria, abores amazonicos y cocteles exoticos, fusion , presentaciones creativas, utilización de ingredientes traídos frescos.",
    direccion: "Cra 33 #7a24 , Carrera 34",
      imagen: "/images/chagra.jpg",
    horarioAtencion: "No se menciona explícitamente",
  },
  {
    id: "banhomia",
    nombre: "Banhomí",
    descripcion:
      "Gema culinaria en Poblado, conocida por su pizza de masa fina, ofrece noches españolas, ambiente agradable.",
    direccion: "Cra. 37 # 8-53",
      imagen: "/images/banhomia.jpg",
    horarioAtencion: "No se menciona explícitamente",
  },
  {
    id: "naan",
    nombre: "Naan",
    descripcion:
      "Mezcla de especias y recetas indias con ingredientes locales sudamericanos.",
    direccion: "Cra. 35 #7-75",
      imagen: "/images/naan.jpg",
    horarioAtencion: "No se menciona explícitamente",
  },
  {
    id: "la-causa",
    nombre: "La Causa",
    descripcion:
      "Amplia selección de platos, sushi increíble, precios muy buenos.",
    direccion: "Cra 33 #8A - 41",
      imagen: "/images/causa.jpg",
    horarioAtencion: "No se menciona explícitamente",
  },
  {
    id: "oni-nikkei",
    nombre: "ONI Nikkei - sushi medellin",
    descripcion:
      "Decoracion legante, sabores experimentales, síntesis armoniosa de las cocinas peruana y japonesa.",
    direccion: "Cra. 35 #10B - 66 Velatorio, local 105",
      imagen: "/images/oni.jpg",
    horarioAtencion: "No se menciona explícitamente",
  },
  {
    id: "casa-el-ramal",
    nombre: "Casa El Ramal",
    descripcion:
      "Joya escondida excepcional y distintiva , magnífica música en vivo , pilas de leña ardiendo con grandes ollas de plata.",
    direccion: "Cra 43D #10 - 72",
      imagen: "/images/ramal.jpg",
    horarioAtencion: "No se menciona explícitamente",
  },
  {
    id: "restaurante-cuan",
    nombre: "Restaurante Cuón",
    descripcion:
      "Restaurante asiático de lujo, sofisticada selección de platos y cócteles asiáticos, restaurante favorito del autor.",
    direccion: "Cl. 8 #43A- 29",
      imagen: "/images/cuan.jpg",
    horarioAtencion: "Ver fragmento",
  },
];

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
const NewRestaurant = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto my-10">
            <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-6 text-center">
                Añadir Nuevo Restaurante
            </h2>
            <form className="space-y-6">
                <div>
                    <label htmlFor="nombre" className="block text-lg font-medium text-gray-700 mb-1">
                        Nombre del Restaurante
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Ej. El Cielo"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Una breve descripción del restaurante..."
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Ej. Calle 7d #43c-36"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Ej. Abierto para almuerzo y cena"
                    />
                </div>
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
const Search = ({ restaurantdata }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
      const results = restaurantdata.filter((restaurant) =>
      restaurant.imagen.toLowerCase().includes(term)  ||
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

// Componente principal de la aplicación
const App = () => {
  // Estado para controlar la vista actual de la aplicación
  const [currentView, setCurrentView] = useState('home');

  // Función para renderizar el componente según la vista actual
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home restaurantdata={restaurantdata} />;
      case 'search':
        return <Search restaurantdata={restaurantdata} />;
      case 'new-restaurant':
        return <NewRestaurant />;
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
