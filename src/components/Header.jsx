import { useAuth } from "../context/AuthContext"


export default function Header() {
  const { user, logout } = useAuth()
  return (
    <header className="bg-white shadow p-4 flex items-center">
      <h1 className="font-bold text-4xl mx-auto">Dashboard de Ventas</h1>
      {user && (
        <div className="flex items-center gap-4 ml-auto">
          <span>{user.name}</span>
          <button onClick={logout} className="text-red-600 font-semibold">Salir</button>
        </div>
      )}
    </header>
  )
}

