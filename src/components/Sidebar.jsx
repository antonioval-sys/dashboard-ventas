import { useState } from 'react'
 import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const [abierto, setAbierto] = useState(true)
  return (
    <aside className="flex items-center">
      <button onClick={() => setAbierto(!abierto)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-emerald-500">  
        {abierto ? 'Cerrar menú' : 'Abrir menú'}
      </button>

      {abierto && (
        <nav className='ml-2 bg-gray-200 p-4 flex space-x-4 rounded-lg'>
          <ul className="flex space-x-4">
            <li> <NavLink to="/">Dashboard</NavLink></li>
            <li> <NavLink to="/ventas">Ventas</NavLink> </li>
            <li><NavLink to="/productos">Productos</NavLink></li>
            <li><NavLink to="/clientes">Clientes</NavLink></li>
          </ul></nav>
      )}
    </aside>
  )
}

