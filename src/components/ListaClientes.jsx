import { useState } from 'react';
import data from '../data/Clientes.json'


export default function ListaClientes() {

    //Estados para Busqueda y filtro por estado
    const [busqueda, setBusqueda] = useState('')
    const [estado, setEstado] = useState('')

    //funcion para quitar acento

    const quitarAcentos = (texto) => {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    }

    const clientesFiltrados = data.filter((cliente) => {
        const clienteNormalizado = quitarAcentos(cliente.nombre.toLowerCase())
        const busquedaNormalizada = quitarAcentos(busqueda.toLowerCase())

        return clienteNormalizado.includes(busquedaNormalizada) && (estado === '' || cliente.estado === estado)
    })
    //paginas
    const [pagina, setPagina] = useState(1);
    const clientesPorPagina = 15;
    const totalPaginas = Math.ceil(clientesFiltrados.length / clientesPorPagina);

    // Tomar solo los que van en la página actual
    const clientesParaMostrar = clientesFiltrados.slice(
        (pagina - 1) * clientesPorPagina,
        pagina * clientesPorPagina
    );

// Crear un array [1, 2, ..., totalPaginas]
const paginasArray = Array.from({ length: totalPaginas }, (_, i) => i + 1);



    return (
        <div className='ml-3 mr-3'>

            <h2 className=" txt-xl font-bold mb-4">Clientes</h2>
            {/*Buacados y filtro */}

            <div className="flex gab-4 mb-4">
                <input type="text"
                    placeholder="Buscar cliente"
                    className="border p-2 rounded flex-1"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
                <select className="border p-2 rouded"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                >
                    <option value="">Todos</option>
                    <option value="Activo">Activo</option>
                    <option value="Prospecto">Prospecto</option>
                    <option value="Inactivo">Inactivo</option>
                </select>

            </div>
            <table className="w-full border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">ID</th>
                        <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">Cliente</th>
                        <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">Empresa</th>
                        <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">Contacto</th>
                        <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">Telefono</th>
                        <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">Email</th>
                        <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">Ciudad</th>
                        <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">Estado</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {clientesParaMostrar.map((cliente) => (
                        <tr key={cliente.id} className="hover:bg-gray-50">
                            <td className="px-2 py-2 text-sm text-gray-600">{cliente.id}</td>
                            <td className="px-2 py-2 text-sm text-gray-600">{cliente.nombre}</td>
                            <td className="px-2 py-2 text-sm text-gray-600">{cliente.empresa}</td>
                            <td className="px-2 py-2 text-sm text-gray-600">{cliente.contacto}</td>
                            <td className="px-2 py-2 text-sm text-gray-600">{cliente.telefono}</td>
                            <td className="px-2 py-2 text-sm text-gray-600">{cliente.email}</td>
                            <td className="px-2 py-2 text-sm text-gray-600">{cliente.ciudad}</td>
                            <td className={`px-2 py-2 text-sm font-semibold ${cliente.estado === 'Activo' ? 'text-green-600' :
                                cliente.estado === 'Inactivo' ? 'text-yellow-600' :
                                    'text-red-600'
                                }`}>
                                {cliente.estado}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className=' flex justify-between'>
                <button onClick={() => setPagina(pagina - 1)} disabled={pagina === 1}>Anterior</button>
                <button></button>
                <button onClick={() => setPagina(pagina + 1)} disabled={pagina === totalPaginas}>Siguiente</button>
            </div>
        </div>
    );
}

