import data from '../data/Clientes.json'

export default function ListaClientes() {

    
    data.forEach(clientes => {

        console.log(clientes);
    });
    return (
        <div className='ml-3 mr-3'>
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
                    {data.map((cliente) => (
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
        </div>
    );
}

