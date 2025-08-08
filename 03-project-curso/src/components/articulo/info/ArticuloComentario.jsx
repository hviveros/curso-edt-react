const ArticuloComentario = ( { comentario } ) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Usuario email</th>
                    <th>Comentario</th>
                </tr>
            </thead>
            <tbody>
                {
                    comentario.map(({ id, email, body }) => (
                        <tr key={ id }>
                            <td>{ email }</td>
                            <td>{ body }</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default ArticuloComentario;