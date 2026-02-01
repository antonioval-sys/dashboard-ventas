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

  <div className='flex h-screen'>
  <Sidebar />

  <div className='flex-1  flex flex-col'>
    <Header />
    
   

    <Routes>
        <Route path="/" element={<Dashboard />} />
      <Route path="/ventas" element={<Ventas />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/clientes" element={<Clientes />} />
      
      </Routes>
      </div>
      </div>
     
      
      </>
  )
}

export default App
