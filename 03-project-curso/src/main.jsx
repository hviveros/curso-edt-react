import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./main.css"
import App from './components/App.jsx'
import Home from './Home.jsx'
import Pagina404 from './components/404.jsx'
import Cuadricula from './components/Cuadricula.jsx'
import ArticuloPage from './components/articulo/ArticuloPage.jsx'
import Perfil from './Perfil.jsx'
import { UserContextProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <App /> }>
                    <Route index element={ <Home /> } />
                    <Route path='perfil' element={ <Perfil /> } />
                </Route>
                <Route path='/articulos' element={ <App /> }>
                    <Route index element={ <Cuadricula /> } />
                    <Route path=':id' element={ <ArticuloPage /> } />
                </Route>
                <Route path='*' element={ <Pagina404 /> } />
            </Routes>
        </BrowserRouter>
    </UserContextProvider>
)
