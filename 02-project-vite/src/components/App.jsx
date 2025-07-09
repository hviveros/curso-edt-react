import Grilla from "./productos/Grilla";
import Header from "./header/Header";
 
function App(){
    return(
        <>
            <Header />
            <main>
                <h1>Productos destacados</h1>
                <Grilla />
            </main>
        </>
    )
}

export default App;