import { useState } from 'react';
import './styles/main.scss';
import ThreeScene from './ThreeScene';  // Importar el componente ThreeScene

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Panel izquierdo */}
      <div className="w-1/4 bg-blue-600 text-white p-6 space-y-8">
        <h2 className="text-2xl font-semibold">Panel de Control</h2>

        {/* Botones en el panel izquierdo */}
        <div className="space-y-4">
          <button className="w-full py-2 bg-blue-700 hover:bg-blue-800 rounded-lg text-white font-semibold">
            Dashboard
          </button>
          <button className="w-full py-2 bg-blue-700 hover:bg-blue-800 rounded-lg text-white font-semibold">
            Informes
          </button>
          <button className="w-full py-2 bg-blue-700 hover:bg-blue-800 rounded-lg text-white font-semibold">
            Ajustes
          </button>
        </div>
      </div>

      {/* Panel derecho */}
      <div className="w-3/4 p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-gray-800">Bienvenido al Dashboard</h1>
          <button
            onClick={() => setCount(count + 1)}
            className="py-2 px-6 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold"
          >
            Incrementar: {count}
          </button>
        </div>

        {/* Sección de cartas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Tarea 1</h3>
            <p className="text-gray-600 mt-2">
              Información sobre la tarea 1. Puedes agregar más detalles aquí.
            </p>
            <button className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
              Ver más
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Tarea 2</h3>
            <p className="text-gray-600 mt-2">
              Información sobre la tarea 2. Puedes agregar más detalles aquí.
            </p>
            <button className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
              Ver más
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Tarea 3</h3>
            <p className="text-gray-600 mt-2">
              Información sobre la tarea 3. Puedes agregar más detalles aquí.
            </p>
            <button className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
              Ver más
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Tarea 4</h3>
            <p className="text-gray-600 mt-2">
              Información sobre la tarea 4. Puedes agregar más detalles aquí.
            </p>
            <button className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
              Ver más
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Tarea 5</h3>
            <p className="text-gray-600 mt-2">
              Información sobre la tarea 5. Puedes agregar más detalles aquí.
            </p>
            <button className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
              Ver más
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Tarea 6</h3>
            <p className="text-gray-600 mt-2">
              Información sobre la tarea 6. Puedes agregar más detalles aquí.
            </p>
            <button className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
              Ver más
            </button>
          </div>
        </div>
      </div>
      
      {/* Aquí está el componente Three.js debajo */}
      <div className="w-full">
        <ThreeScene />
      </div>
    </div>
  );
}

export default App;
