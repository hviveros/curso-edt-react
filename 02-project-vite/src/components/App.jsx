import Calculadora from "./Calculadora";
import Grilla from "./productos/Grilla";
import Header from "./header/Header";
 
function App(){
    return(
        <>
            <Header />
            <main>
                <h1>Calculadora compleja</h1>
                {/* <Calculadora nombre="Formulario de suma" /> */}
                <Grilla />
            </main>
        </>
    )
}

export default App;