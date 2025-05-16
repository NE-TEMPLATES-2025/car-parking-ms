import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import RootLayout from './layout/RootLayout'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout/>}>
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        </Route>

        <Route element={<RootLayout/>}>
        <Route path='/' index element={<Dashboard/>}/>
        </Route>
      </Routes>
    </Router>
    
  )
}

export default App
