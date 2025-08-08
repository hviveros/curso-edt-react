import axios from "axios";
import { useState, useEffect } from "react";

const usePetition = (endpoint) => {

    const API_URL = import.meta.env.VITE_API_URL;
    
    const[data, setData] = useState();
    const[cargando, setCargando] = useState(false);

    useEffect(() => {

        setCargando(true);

        axios.get(`${API_URL}${endpoint}`)
        .then((data) => {
                setData(data.data);
                setCargando(false);
            })
            .catch(() => {
                setCargando(false);
                console.error("Fallo en la petición");
            })
    }, []);

    return [data, cargando];
}

export default usePetition;