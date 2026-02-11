 const ventas = [
    { id: 1, cliente: 'Juan Pérez', total: 3500, estado: 'Pagado' },
    { id: 2, cliente: 'María López', total: 4200, estado: 'Pendiente' },
    { id: 3, cliente: 'Carlos Ruiz', total: 4800, estado: 'Pagado' }
  ]

export default function BarDay() {
    const data = ventas.map( v => v.total);

  const maxValue = Math.max(...data);

  return (
    <div className="chart">
      {data.map((value, index) => (
        <div key={index} className="bar-container">
          <div
            className="bar"
            style={{
              height: `${(value / maxValue) * 100}%`
            }}
          />
        </div>
      ))}
    </div>
  );
}