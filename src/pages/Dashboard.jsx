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
    return <p>Cargando datos...</p>
  }

  return (
    <main>
      <h2>Resumen de Ventas</h2>

      <div>
        <StatCard titulo="Ventas del día" valor={formatCurrency(resumen.dia)} />
        <StatCard titulo="Ventas del mes" valor={formatCurrency(resumen.mes)} />
        <StatCard titulo="Órdenes" valor={resumen.ordenes} />
        <StatCard titulo="Clientes" valor={resumen.clientes} />
      </div>
      <div>
        <h2>Últimas ventas</h2>
        <table border="1">
          <thead >
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Total</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map((venta) => (
              <tr key={venta.id}>
                <td>{venta.id}</td>
                <td>{venta.cliente}</td>
                <td>{venta.total}</td>
                <td>{venta.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

