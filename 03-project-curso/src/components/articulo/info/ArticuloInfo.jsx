const ArticuloInfo = ({ articulo }) => {
    return(
        <div className="info">
            <h1>{ articulo.title }</h1>
            <p> <span className="label">Id:</span> { articulo.id }</p>
            <p> <span className="label">Id Usuario:</span> { articulo.userId }</p>
            <p className="articulo-body">{ articulo.body }</p>
        </div>
    )
}

export default ArticuloInfo;