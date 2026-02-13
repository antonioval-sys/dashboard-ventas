const ventas = [
  { id: 1, cliente: 'Juan Pérez', total: 3500, estado: 'Pagado' },
  { id: 2, cliente: 'María López', total: 4200, estado: 'Pendiente' },
  { id: 3, cliente: 'Carlos Ruiz', total: 4800, estado: 'Pagado' }
]

export default function BarDay() {
  const pagos = ventas.filter(v => v.estado === 'Pagado');
  const pendientes = ventas.filter(v => v.estado === 'Pendiente');
  const pagados = pagos.map(p => p.total);
  const pendientePago = pendientes.map(p => p.total);

  const sumPag = pagados.reduce((acum, num) => acum + num, 0);

  const sumPen = pendientePago.reduce((acum, num) => acum + num, 0);

  const data = ventas.map(v => v.total);

  const maxValue = data.reduce((acum, num) => acum + num, 0);

  return (
    <div className="flex gap-4 h-52 p-2.5 border-b-2 border-l-2 border-b-gray-800 border-l-gray-800 items-end bg-gray-100 w-2xl">

      <div className="flex-1 flex flex-col justify-end h-full">
        <span>${(sumPag / maxValue) * 100}%</span>
        <div
          className="w-full bg-emerald-600 transition-all duration-500 ease-in-out"
          style={{
            height: `${(sumPag / maxValue) * 100}%`
          }}
        />
        <div>
          <p>Pagado: ${sumPag}</p>
        </div>
      </div>


      <div className="flex-1 flex flex-col justify-end h-full">
        <span>${(sumPen / maxValue) * 100}%</span>
        <div
          className="w-full bg-amber-500 transition-all duration-500 ease-in-out"
          style={{
            height: `${(sumPen / maxValue) * 100}%`
          }}
        />
        <div>
          <p>Pendiente: ${sumPen} </p>
        </div>

      </div>

    </div>
  );
}