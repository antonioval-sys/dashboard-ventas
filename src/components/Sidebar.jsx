import { useState } from 'react'
 import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const [abierto, setAbierto] = useState(true)
  return (
    <aside>
      <button onClick={() => setAbierto(!abierto)}
        className={abierto ? 'btn-activo' : 'btn-inactivo'}>   {/*Cambia la clase del botono cuando se activo o inactivo*/}
        {abierto ? 'Cerrar menú' : 'Abrir menú'}
      </button>

      {abierto && (
        <nav className='nav-activo'>
          <ul >
            <li> <NavLink to="/">Dashboard</NavLink></li>
            <li> <NavLink to="/ventas">Ventas</NavLink> </li>
            <li><NavLink to="/productos">Productos</NavLink></li>
            <li><NavLink to="/clientes">Clientes</NavLink></li>
          </ul></nav>
      )}
    </aside>
  )
}

