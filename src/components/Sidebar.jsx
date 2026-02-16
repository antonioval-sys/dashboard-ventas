import { useState } from 'react'
 import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const [abierto, setAbierto] = useState(true)
  return (
    <aside className="w-64 bg-gray-800 text-white  h-screen">
      <button onClick={() => setAbierto(!abierto)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-emerald-500 mx-auto block mt-2 mb-2">  
        {abierto ? 'Cerrar menú' : 'Abrir menú'}
      </button>

      {abierto && (
        <nav className='block py-2 px-3 rounded-3xl bg-gray-700 flex justify-center' >
          <ul>
            <li> <NavLink to="/"   className={({ isActive }) =>
          `block py-2 px-3 rounded transition
          ${isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-500'}`
        }>Dashboard</NavLink></li>
            <li> <NavLink to="/ventas"   className={({ isActive }) =>
          `block py-2 px-3 rounded transition
          ${isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-500'}`
        }>Ventas</NavLink> </li>
            <li><NavLink to="/productos"   className={({ isActive }) =>
          `block py-2 px-3 rounded transition
          ${isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-500'}`
        }>Productos</NavLink></li>
            <li><NavLink to="/clientes"   className={({ isActive }) =>
          `block py-2 px-3 rounded transition
          ${isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-500'}`
        }>Clientes</NavLink></li>
          </ul></nav>
      )}
    </aside>
  )
}

