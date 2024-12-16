import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

//Pages
import Login from './Pages/Login'
import Home from './Pages/Home'
import Cadastro from './Pages/Cadastro'
import Consultar from './Pages/Consultar'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/cadastrar' element={<Cadastro />}></Route>
        <Route path='/consultar' element={<Consultar />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    
  )
}

function NotFound() {
  return (
    <div>
      <h1>404 - Página Não Encontrada</h1>
      <Link to="/">Voltar ao Login</Link>
    </div>
  );
}

export default App
