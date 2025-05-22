import React from 'react';

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

export default Navbar;
