// NotFoundPage.jsx

// importo parte Link
import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (

        <div className="container text-center">
            <div className="div-notFound">
                <h2 className="display-4">Pagina non trovata</h2>
                <p>Spiacenti, ma la pagina che stai cercando non esiste</p>
                <Link to="/"> <button className="btn btn-custom btn-size">Ritorna alla home</button></Link>
            </div>
        </div>
    )
}

export default NotFoundPage