import { useState } from 'react'
export default function Sidebar() {
  const [abierto, setAbierto] = useState(true)
  return (
  <aside>
      <button onClick={() => setAbierto(!abierto)}>
        {abierto ? 'Cerrar menú' : 'Abrir menú'}
      </button>

      {abierto && (
        <ul>
          <li>Dashboard</li>
          <li>Ventas</li>
          <li>Productos</li>
          <li>Clientes</li>
        </ul>
      )}
    </aside>
  )
}

 