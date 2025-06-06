import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, addDoc, getDocs } from "firebase/firestore";

// Componente NewRestaurant corregido
const NewRestaurant = ({ onAdd, goHome }) => {
    const [form, setForm] = useState({
        nombre: '',
        descripcion: '',
        direccion: '',
        horario: '',
        imagen: '' // Campo imagen incluido
    });
    const [restaurants, setRestaurants] = useState([]);

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
                imagen: form.imagen, // Usar el valor del formulario, no string vacío
            });
            setForm({ nombre: '', descripcion: '', direccion: '', horario: '', imagen: '' });
            if (onAdd) onAdd();
            if (goHome) goHome();
        } catch (error) {
            console.error("Error al guardar restaurante:", error);
            alert("Error al guardar el restaurante");
        }
    };

    const fetchRestaurants = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "restaurantes"));
            const restaurantsList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setRestaurants(restaurantsList);
        } catch (error) {
            console.error("Error al obtener restaurantes: ", error);
        }
    };

    useEffect(() => {
        fetchRestaurants();
    }, []);

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
                {/* Campo para la URL de la imagen - ESTO FALTABA */}
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

                {/* Vista previa de la imagen - ESTO TAMBIÉN FALTABA */}
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

            {/* Sección para mostrar los restaurantes existentes - ESTO TAMBIÉN FALTABA */}
            <div className="mt-10">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                    Restaurantes Existentes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {restaurants.map((restaurant) => (
                        <div
                            key={restaurant.id}
                            className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
                        >
                            <img
                                src={restaurant.imagen || "https://placehold.co/400x250/FFD1DC/333333?text=Imagen+no+disponible"}
                                alt={restaurant.nombre}
                                className="w-full h-48 object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/400x250/FFD1DC/333333?text=Imagen+no+disponible";
                                }}
                            />
                            <h4 className="text-xl font-semibold text-gray-800 mt-4">
                                {restaurant.nombre}
                            </h4>
                            <p className="text-gray-600 mt-2">
                                {restaurant.descripcion}
                            </p>
                            <p className="text-gray-500 text-sm mt-2">
                                Dirección: {restaurant.direccion}
                            </p>
                            <p className="text-gray-500 text-sm">
                                Horario: {restaurant.horarioAtencion}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewRestaurant;
