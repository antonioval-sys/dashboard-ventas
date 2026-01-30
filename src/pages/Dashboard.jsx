import { useEffect, useState } from 'react'
import StatCard from '../components/StatCard'
import { formatCurrency } from '../utils/formatCurrency'


export default function Dashboard() {
  const [resumen, setResumen] = useState(null)
  const [ventas, setVentas] = useState([])

  useEffect(() => {
    //simula llamada a API//
    setTimeout(() => {
      setResumen({
        dia: 12500,
        mes: 245000,
        ordenes: 120,
        clientes: 48
      })
      setVentas([
        { id: 1, cliente: 'Juan Pérez', total: 3500, estado: 'Pagado' },
        { id: 2, cliente: 'Maria Lopez', total: 4200, estado: 'Pendiente' },
        { id: 3, cliente: 'Carlos Ruiz', total: 4800, estado: 'Pagado' }
      ])
    }, 1000)
  }, [])

  if (!resumen) {
    return <p className='flex justify-center items-center text-emerald-700 text-3xl font-serif' >Cargando datos...</p>
  }

  return (
    <main className='flex justify-center flex-col items-center'>
      <h2>Resumen de Ventas</h2>

      <div className='flex-1 '>
        <StatCard titulo="Ventas del día" valor={formatCurrency(resumen.dia)} />
        <StatCard titulo="Ventas del mes" valor={formatCurrency(resumen.mes)} />
        <StatCard titulo="Órdenes" valor={resumen.ordenes} />
        <StatCard titulo="Clientes" valor={resumen.clientes} />
      </div>
      <div>
        <h2>Últimas ventas</h2>
      <div className="overflow-x-auto">
  <table className="min-w-full border border-gray-300">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ID</th>
        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Cliente</th>
        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Total</th>
        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Estado</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {ventas.map((venta) => (
        <tr key={venta.id} className="hover:bg-gray-50">
          <td className="px-4 py-2 text-sm text-gray-600">{venta.id}</td>
          <td className="px-4 py-2 text-sm text-gray-600">{venta.cliente}</td>
          <td className="px-4 py-2 text-sm text-gray-600">{venta.total}</td>
          <td className={`px-4 py-2 text-sm font-semibold ${
            venta.estado === 'Pagado' ? 'text-green-600' :
            venta.estado === 'Pendiente' ? 'text-yellow-600' :
            'text-red-600'
          }`}>
            {venta.estado}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      </div>
    </main>
  )
}

