import { useState } from "react"

export default function Ventas() {
  // Estados para búsqueda y filtro por estado
  const [busqueda, setBusqueda] = useState('')
  const [estado, setEstado] = useState('')

  // Datos de ejemplo de ventas
  const ventas = [
    { id: 1, cliente: 'Juan Pérez', total: 3500, estado: 'Pagado' },
    { id: 2, cliente: 'María López', total: 4200, estado: 'Pendiente' },
    { id: 3, cliente: 'Carlos Ruiz', total: 4800, estado: 'Pagado' }
  ]

  // Función para quitar acentos
  const quitarAcentos = (texto) => {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
  }

  // Filtrado de ventas
  const ventasFiltradas = ventas.filter((venta) => {
    const clienteNormalizado = quitarAcentos(venta.cliente.toLowerCase())
    const busquedaNormalizada = quitarAcentos(busqueda.toLowerCase())

    return (
      clienteNormalizado.includes(busquedaNormalizada) &&
      (estado === '' || venta.estado === estado)
    )
  })

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Ventas</h2>

      {/* Buscador y filtro */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Buscar cliente"
          className="border p-2 rounded flex-1"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="Pagado">Pagado</option>
          <option value="Pendiente">Pendiente</option>
        </select>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full max-w-4xl mx-auto bg-white rounded shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Cliente</th>
              <th className="p-2 text-left">Total</th>
              <th className="p-2 text-left">Estado</th>
            </tr>
          </thead>
          <tbody>
            {ventasFiltradas.map((venta) => (
              <tr key={venta.id} className="hover:bg-gray-50">
                <td className="p-2">{venta.id}</td>
                <td className="p-2">{venta.cliente}</td>
                <td className="p-2">${venta.total}</td>
                <td className={`p-2 font-semibold ${
                  venta.estado === 'Pagado' ? 'text-green-600' :
                  venta.estado === 'Pendiente' ? 'text-yellow-600' :
                  'text-red-600'
                }`}>{venta.estado}</td>
              </tr>
            ))}
            {ventasFiltradas.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-500">
                  No se encontraron ventas
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    
  )
}

