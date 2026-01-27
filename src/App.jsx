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
  <Sidebar /> 
      <Header />
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
