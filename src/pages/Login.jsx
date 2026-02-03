import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [nombre, setNombre] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(nombre)
        navigate('/')
    }

    return (
        <div className=" flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80">
                <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
                <input type="text" placeholder="Usuario" className="border p-2 w-full mb-4" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                <button className="bg-blue-600 text-white w-full py-2 rounded">Entrar</button>
            </form>

        </div>


    )




}
