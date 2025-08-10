# Curso: React desde Cero - Resumen
Resumen del curso React desde Cero, enfocado en aprender los fundamentos de React, incluyendo componentes, JSX, estado, hooks, React Router, Context API y un proyecto final.
## Objetivos

Dominar componentes, JSX, props, estado, hooks.
Aplicar patrones de diseño (Render Props, Composition).
Crear una app con Vite y React Router, desplegar en Vercel/Netlify.

## Estructura del Curso
### Capítulo 1: Fundamentos

JSX: Sintaxis JS + XML, reglas (className, htmlFor, fragmentos).
DOM y props: Mini-librería (createElement), contenido dinámico.

### Capítulo 2: Primera App

Dependencias: Node.js, npm, Vite (npm create vite@latest).
Estructura: src, main.jsx, App.jsx, package.json.

### Capítulo 3: Componentes

Definición: Bloques reutilizables, Atomic Design.
Sintaxis y props: Funciones, <App />, desestructuración.

### Capítulo 4: Componentes de tipo clase

Legacy: Clases con extends Component, this.state, setState.
Ciclo de vida: constructor, render, componentDidMount.

### Capítulo 5: Componentes Funcionales y Hooks

Funcionales: Funciones sin this, retornan JSX.
Hooks: useState, useEffect, useRef, hooks personalizados (usePetition).

### Capítulo 6: React Router

API: JSONPlaceholder (https://jsonplaceholder.typicode.com/).
Axios: Instalación (npm install axios), peticiones HTTP.

### Capítulo 7: React Router (2)

Instalación: react-router-dom@6.
Rutas: <BrowserRouter>, <Link>, <NavLink>, <Outlet>, rutas dinámicas (:id).

### Capítulo 8: Context API y más

useContext: Centraliza datos (e.g., sesión de usuario).
Hooks personalizados: usePetition con cargando, error.

### Capítulo 9: Proyecto Final

Login: Formulario con useState, POST a https://reqres.in/api/login.
Navegación: useNavigate, <Navigate>, gestión de token.
Errores: Loader y mensajes de error en login.


### Proyecto final: App de blog con TypeScript, Tailwind, despliegue.
