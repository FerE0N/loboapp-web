// components/DashboardStats.tsx
import React from 'react';

export default function DashboardStats() {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Resumen de Espacios - LoboApp
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow border-l-4 border-green-500">
          <p className="text-gray-500 text-sm">Aulas Disponibles</p>
          <p className="text-3xl font-bold text-green-600">12</p>
        </div>
        <div className="bg-white p-4 rounded shadow border-l-4 border-red-500">
          <p className="text-gray-500 text-sm">Aulas Ocupadas</p>
          <p className="text-3xl font-bold text-red-600">8</p>
        </div>
        <div className="bg-white p-4 rounded shadow border-l-4 border-blue-500">
          <p className="text-gray-500 text-sm">Mantenimiento</p>
          <p className="text-3xl font-bold text-blue-600">2</p>
        </div>
      </div>
    </div>
  );
}