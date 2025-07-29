import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./main.css"
import App from './components/App.jsx'
import Home from './Home.jsx'
import Pagina404 from './components/404.jsx'
import Cuadricula from './components/Cuadricula.jsx'
import UsuarioPage from './components/usuario/UsuarioPage.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <App /> }>
                <Route index element={ <Home /> } />
            </Route>
            <Route path='/usuarios' element={ <App /> }>
                <Route index element={ <Cuadricula /> } />
                <Route path=':id' element={ <UsuarioPage /> } />
            </Route>
            <Route path='*' element={ <Pagina404 /> } />
        </Routes>
    </BrowserRouter>
)
