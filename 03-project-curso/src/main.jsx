import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./main.css"
import App from './components/App.jsx'
import Saludo from './components/Saludo.jsx'
import Pagina404 from './components/404.jsx'
import Menu from './components/menu/menu.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <Menu />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <App /> } />
                <Route path='/saludo' element={ <Saludo /> } />
                <Route path='*' element={ <Pagina404 /> } />
            </Routes>
        </BrowserRouter>
    </>
)
