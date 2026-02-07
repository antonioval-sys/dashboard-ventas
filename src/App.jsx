import { AuthProvider } from './context/AuthContext'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Ventas from './pages/Ventas'
import Productos from './pages/Productos'
import Clientes from './pages/Clientes'
import PrivateRoute from './components/PrivateRoute'
import Login from './pages/Login'



function App() {


  return (

<AuthProvider>
  <div className='flex h-screen'>
  <Sidebar />
  <div className='flex-1  flex flex-col'>
    <Header />

    <Routes>
       <Route path="/login" element={<Login />} />
        <Route path="/" element={ <PrivateRoute> <Dashboard /></PrivateRoute>} />
      <Route path="/ventas" element={<PrivateRoute> <Ventas /></PrivateRoute>} />
      <Route path="/productos" element={<PrivateRoute> <Productos /></PrivateRoute>} />
      <Route path="/clientes" element={<PrivateRoute> <Clientes /></PrivateRoute>} />
      
      </Routes>
      </div>
      </div>
     </AuthProvider>
    
  )
}

export default App
