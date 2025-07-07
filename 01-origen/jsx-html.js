const Article = ({ title, content, img }) => {
    return (
        <>            
            <h1>{ title }</h1>
            <p>{ content }</p>
            <span>{ 2+5 }</span>
            <div>
                <img src={ img } alt={ title } />
            </div>
            <span>{ new Date }</span>
            <form>
                <label htmlFor="">Nombre</label>
                <input onChange={() => {}} type="text" name="nombre" id="nombre" />
            </form>
        </>
    )
}