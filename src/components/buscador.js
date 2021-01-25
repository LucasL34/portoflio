
function Buscador(){
    return(
        <div className="navbar navbar-light justify-content-center">
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Buscar proyecto"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" id="btn-search"> Search </button>
            </form>
        </div>
    )
}

export default Buscador;