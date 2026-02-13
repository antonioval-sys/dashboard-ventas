const ventasPorMes = {
  Enero: [
    { id: 1, cliente: 'Juan Pérez', total: 35000, estado: 'Pagado' },
    { id: 2, cliente: 'María López', total: 42000, estado: 'Pendiente' },
    { id: 3, cliente: 'Carlos Ruiz', total: 48000, estado: 'Pagado' }
  ],
  Febrero: [
    { id: 4, cliente: 'Juan Pérez', total: 39000, estado: 'Pagado' },
    { id: 5, cliente: 'María López', total: 41000, estado: 'Pagado' },
    { id: 6, cliente: 'Carlos Ruiz', total: 52000, estado: 'Pendiente' }
  ],
  Marzo: [
    { id: 7, cliente: 'Juan Pérez', total: 36000, estado: 'Pendiente' },
    { id: 8, cliente: 'María López', total: 45000, estado: 'Pagado' },
    { id: 9, cliente: 'Carlos Ruiz', total: 50000, estado: 'Pagado' }
  ],
  Abril: [
    { id: 10, cliente: 'Juan Pérez', total: 42000, estado: 'Pagado' },
    { id: 11, cliente: 'María López', total: 47000, estado: 'Pendiente' },
    { id: 12, cliente: 'Carlos Ruiz', total: 53000, estado: 'Pagado' }
  ]
};

export default function BarMonth() {

 const totalesPorMes = Object.keys(ventasPorMes).reduce((acc, mes) => {
  acc[mes] = ventasPorMes[mes].reduce((suma, venta) => suma + venta.total, 0);
  return acc;
}, {});

const maxValue = Object.values(totalesPorMes).reduce((acum, num) => acum + num, 0);

  return (
    <div className="flex gap-4 h-52 p-2.5 border-b-2 border-l-2 border-b-gray-800 border-l-gray-800 items-end bg-gray-100 w-fit ml-3">
<span>Venta Mensuales</span>

      <div className="flex-1 flex flex-col justify-end h-full">
        <span>${(totalesPorMes.Enero/ maxValue) * 100}%</span>
        <div
          className="w-full bg-sky-600 transition-all duration-500 ease-in-out"
          style={{
            height: `${(totalesPorMes.Enero / maxValue) * 100}%`
          }}
        />
        <div>
          <p>Enero: ${totalesPorMes.Enero}</p>
        </div>
      </div>


      <div className="flex-1 flex flex-col justify-end h-full">
        <span>${(totalesPorMes.Febrero / maxValue) * 100}%</span>
        <div
          className="w-full bg-violet-400 transition-all duration-500 ease-in-out"
          style={{
            height: `${(totalesPorMes.Febrero / maxValue) * 100}%`
          }}
        />
        <div>
          <p>Febrero: ${totalesPorMes.Febrero} </p>
        </div>

      </div>


       <div className="flex-1 flex flex-col justify-end h-full">
        <span>${(totalesPorMes.Marzo / maxValue) * 100}%</span>
        <div
          className="w-full bg-emerald-500 transition-all duration-500 ease-in-out"
          style={{
            height: `${(totalesPorMes.Marzo / maxValue) * 100}%`
          }}
        />
        <div>
          <p>Marzo: ${totalesPorMes.Marzo} </p>
        </div>

      </div>

       <div className="flex-1 flex flex-col justify-end h-full">
        <span>${(totalesPorMes.Abril / maxValue) * 100}%</span>
        <div
          className="w-full bg-cyan-300 transition-all duration-500 ease-in-out"
          style={{
            height: `${(totalesPorMes.Abril / maxValue) * 100}%`
          }}
        />
        <div>
          <p>Abril: ${totalesPorMes.Abril} </p>
        </div>

      </div>

    </div>
  );
}