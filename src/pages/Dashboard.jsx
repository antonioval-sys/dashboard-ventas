import StatCard from '../components/StatCard'
export default function Dashboard() {
 return (
    <main>
      <h2>Resumen de Ventas</h2>

      <div>
        <StatCard titulo="Ventas del día" valor="$12,500" />
        <StatCard titulo="Ventas del mes" valor="$245,000" />
        <StatCard titulo="Órdenes" valor="120" />
        <StatCard titulo="Clientes" valor="48" />
      </div>
    </main>
  )
}

