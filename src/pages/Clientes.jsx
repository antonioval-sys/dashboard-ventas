import { useState } from "react";
import ListaClientes from "../components/ListaClientes"
import data from '../data/Clientes.json'

 



export default function Clientes() {

    //Estados para Busqueda y filtro por estado
const [busqueda, setBusqueda] = useState('')
const [estado, setEstado] = useState('')

//funcion para quitar acento

const quitarAcentos = (texto) => {
    return texto .normalize("NFD") .replace(/[\u0300-\u036f]/g, "")
}

const clientesFiltrados = data.filter((cliente) => {
    const clienteNormalizado = quitarAcentos(cliente.nombre.toLowerCase())
    const busquedaNormalizada = quitarAcentos(busqueda.toLowerCase())

    return 
    clienteNormalizado.includes(busquedaNormalizada) && (estado === '' || data.estado === estado)
})

    return (
    <div className="p-6">
    <ListaClientes/>
</div>

);
}