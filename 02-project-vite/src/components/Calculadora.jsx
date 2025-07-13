import { useState, useEffect } from "react";

const Calculadora = ({nombre}) => {

    // Por norma es state y setState
    const [numeros, setNumeros] = useState({
        numero1: '',
        numero2: ''
    });

    const [texto, setTexto] = useState("");


    useEffect(() => {
        console.log(new Date().getTime());
    }, [texto]);

    const setNumber = (e) => {
        setNumeros({
            ...numeros,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <h2>{ nombre }</h2>
            <form>
                <input 
                    type="number" 
                    name="numero1" 
                    value={numeros.numero1} 
                    onChange={setNumber}
                />
                <input 
                    type="number" 
                    name="numero2" 
                    value={numeros.numero2} 
                    onChange={setNumber}
                />
            </form>
            <span>Resultado: { Number(numeros.numero1) + Number(numeros.numero2) }</span>
            <input type="text" onChange={(e) => { setTexto(e.target.value) }} />
            <span>{ texto }</span>
        </>
    )

}

export default Calculadora;
