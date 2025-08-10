import axios from "axios";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom"
import "./Login.css"

const Login = () => {

    // useNavigate
    const navigation = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState()

    const submit = (e) => {
        e.preventDefault()
        setError(null)
        setCargando(true)
        console.log(user)
        axios.post(`https://reqres.in/api/login`, user, {
            headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1',
            },
        })
        .then(data => {
            setCargando(false)
            localStorage.setItem("tokenMiBlog", data.data.token)
            navigation("/articulos")
        })
        // .then(data => console.log(data))
        .catch((e) => {
            setCargando(false)
            console.error('Error:', e.response.data)
            setError(e)
        });
    }

    if (localStorage.getItem("tokenMiBlog")) return <Navigate to="/" /> 

    return(
        <div className="login-container">
            <h1>Iniciar sesión</h1>
            <form onSubmit={submit}>
                <div className="field">
                    <label htmlFor="email">Correo: eve.holt@reqres.in</label>
                    <input required onChange={(e) => {
                        setUser({
                        ...user,
                        email: e.target.value
                        })
                    }} type="email" name="email" />
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña: cityslicka</label>
                    <input required onChange={(e) => {
                        setUser({
                        ...user,
                        password: e.target.value
                        })
                    }} type="password" name="password"/>
                </div>
                <div className="submit">
                    <input type="submit" value={cargando ? "Cargando.." : "Ingresar"} />
                </div>
            </form>
            {
                error && <span className="error">{JSON.stringify(error.response.data)}</span>
            }
        </div>
    )
}

export default Login;