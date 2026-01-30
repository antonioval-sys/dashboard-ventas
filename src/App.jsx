import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Ventas from './pages/Ventas'
import Productos from './pages/Productos'
import Clientes from './pages/Clientes'

function App() {


  return (
    <>
    <div className="flex items-center p-4 bg-amber-700">
  {/* Espacio vacío a la izquierda */}
  <div className="flex-1"></div>

  {/* Header centrado */}
  <div className="flex-1 flex justify-center">
    <Header />
  </div>

  {/* Sidebar a la derecha */}
  <div className="flex-1 flex justify-end">
    <Sidebar />
  </div>
</div>
    <Routes>
        <Route path="/" element={<Dashboard />} />
      <Route path="/ventas" element={<Ventas />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/clientes" element={<Clientes />} />
      
      </Routes>
      </>
  )
}

export default App
