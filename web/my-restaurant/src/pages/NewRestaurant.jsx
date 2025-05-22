import React from 'react';

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

export default NewRestaurant;
