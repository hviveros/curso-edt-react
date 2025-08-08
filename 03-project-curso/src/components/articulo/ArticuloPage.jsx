import { useParams } from "react-router-dom";
import usePetition from "../../hooks/usePetition";
import ArticuloInfo from "./info/ArticuloInfo";
import ArticuloComentario from "./info/ArticuloComentario";

const ArticuloPage = () => {

    const params = useParams()

    const [articulo, cargandoArticulo] = usePetition(`posts/${params.id}`);
    const [comentario, cargandoComentario] = usePetition(`posts/${params.id}/comments`);

    if( cargandoArticulo || cargandoComentario) return <span>Cargando...</span>;

    return(
        <>
            {
                articulo && <ArticuloInfo articulo={articulo} />
            }

            <h4><span className="label">Comentarios:</span></h4>
            <div className="info">
                {
                    comentario && <ArticuloComentario comentario={comentario} />
                }
            </div>
        </>
    )
}

export default ArticuloPage;