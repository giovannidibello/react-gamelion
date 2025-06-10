// Header.jsx

// importo il modulo per il link
import { Link } from "react-router-dom"

// importo fontawesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClapperboard } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    return (

        <nav className="navbar navbar-expand-md navbar-light shadow">
            <div className="d-flex justify-content-start container-fluid">
                <div className="logo">
                    <Link className="navbar-brand" to="/">
                        <img src="/gamelion-logo.png" alt="Gamelion Logo" />
                    </Link>
                </div>
                <div className="title">
                    <img src="/gamelion-text.png" alt="Gamelion Title" />
                </div>
            </div>
        </nav>

    );

}