import Calculadora from "./Calculadora";
import Header from "./header/Header";
 
function App(){
    return(
        <>
            <Header />
            <main>
                <h1>Calculadora simple</h1>
                <Calculadora nombre="Formulario de suma" />
            </main>
        </>
    )
}

export default App;